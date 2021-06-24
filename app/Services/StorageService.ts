import { storage, AmazonWebServicesS3Storage } from './storage_driver'
import fs from 'fs'
import Application from '@ioc:Adonis/Core/Application'

export class StorageService {
  public async localUpload(path: string, file: any) {
    if (file) {
      return await file.move(Application.tmpPath(path))
    }
  }

  public async s3PublicUpload(path: string, file: any) {
    if (file) {
      return storage
        .disk<AmazonWebServicesS3Storage>('s3')
        .putPublic(path, fs.createReadStream(file.tmpPath), file.type + '/' + file.subtype)
    }
  }
}
