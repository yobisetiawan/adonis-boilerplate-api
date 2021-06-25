import { storage, AmazonWebServicesS3Storage } from './storage_driver'
import fs from 'fs'
import Application from '@ioc:Adonis/Core/Application'

export class StorageService {
  public async localUpload(path: string, file: any) {
    if (file) {
      return await file.move(Application.tmpPath(path))
    }
  }

  public async s3PublicUpload(path: string, file: any, transformerFile?: any) {
    if (file) {
      let prepareFile = fs.createReadStream(file.tmpPath)
      if (transformerFile) {
        prepareFile = await transformerFile
      }

      return storage
        .disk<AmazonWebServicesS3Storage>('s3')
        .putPublic(path, prepareFile, file.type + '/' + file.subtype)
    }
  }
}
