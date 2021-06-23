import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StorageService } from 'App/Services/StorageService'

export default class FilesController {
  protected storage: StorageService

  constructor() {
    this.storage = new StorageService()
  }

  public async upload({ request }: HttpContextContract) {
    const coverImage = request.file('cover_image')
    return this.storage.localUpload('uploads/images', coverImage)
  }

  public async cloudUpload({ request }: HttpContextContract) {
    const coverImage = request.file('cover_image')
    return this.storage.s3PublicUpload('test10.jpg', coverImage)
  }
}
