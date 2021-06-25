import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StorageService } from 'App/Services/StorageService'
import { ImageService } from 'App/Services/ImageService'

export default class FilesController {
  protected storage: StorageService
  protected image: ImageService

  constructor() {
    this.storage = new StorageService()
    this.image = new ImageService()
  }

  public async upload({ request }: HttpContextContract) {
    const coverImage = request.file('cover_image')
    return this.storage.localUpload('uploads/images', coverImage)
  }

  public async cloudUpload({ request }: HttpContextContract) {
    const coverImage = request.file('cover_image')
    return this.storage.s3PublicUpload('test11.jpg', coverImage)
  }

  public async cloudResizeUpload({ request }: HttpContextContract) {
    const coverImage = request.file('cover_image')
    return this.storage.s3PublicUpload(
      'test10.jpg',
      coverImage,
      this.image.resize(coverImage, { height: 100, width: 100 })
    )
  }
}
