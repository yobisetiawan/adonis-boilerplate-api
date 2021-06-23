import { NoSuchBucket, FileNotFound, PermissionMissing, UnknownException } from '@slynova/flydrive'

import { AmazonWebServicesS3Storage } from '@slynova/flydrive-s3'

function handleError(err, path, bucket) {
  switch (err.name) {
    case 'NoSuchBucket':
      return new NoSuchBucket(err, bucket)
    case 'NoSuchKey':
      return new FileNotFound(err, path)
    case 'AllAccessDisabled':
      return new PermissionMissing(err, path)
    default:
      return new UnknownException(err, err.name, path)
  }
}

export default class MyAmazonWebServicesS3Storage extends AmazonWebServicesS3Storage {
  constructor(config) {
    super(config)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  async putPublic(location: string, content: any, contentType) {
    const params = {
      Key: location,
      Body: content,
      Bucket: this.$bucket,
      ACL: 'public-read',
      ContentType: contentType,
    }
    try {
      const result = await this.$driver.upload(params).promise()
      return { raw: result }
    } catch (e) {
      throw handleError(e, location, this.$bucket)
    }
  }
}
