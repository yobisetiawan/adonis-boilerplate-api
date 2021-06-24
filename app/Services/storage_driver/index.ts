import { StorageManager } from '@slynova/flydrive'

import AmazonWebServicesS3Storage from './s3'

import config from '../../../config/storage'

const storage = new StorageManager(config)

storage.registerDriver('s3', AmazonWebServicesS3Storage)

export { storage, AmazonWebServicesS3Storage }
