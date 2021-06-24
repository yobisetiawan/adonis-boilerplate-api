import Env from '@ioc:Adonis/Core/Env'
/**
 * @slynova/flydrive
 *
 * @license MIT
 * @copyright Slynova - Romain Lanz <romain.lanz@slynova.ch>
 */

export default {
  /*
	 |--------------------------------------------------------------------------
	 | Default Filesystem Disk
	 |--------------------------------------------------------------------------
	 */
  default: 's3',

  /*
	 |--------------------------------------------------------------------------
	 | Filesystem Disks
	 |--------------------------------------------------------------------------
	 |
	 | Supported: "local", "s3"
	 |
	 */
  disks: {
    local: {
      driver: 'local',
      config: {
        root: process.cwd(),
      },
    },

    s3: {
      driver: 's3',
      config: {
        key: Env.get('S3_KEY'),
        secret: Env.get('S3_SECRET'),
        region: Env.get('S3_REGION'),
        bucket: Env.get('S3_BUCKET'),
        acl: 'public-read',
      },
    },

    spaces: {
      driver: 's3',
      config: {
        key: 'SPACES_KEY',
        secret: 'SPACES_SECRET',
        endpoint: 'SPACES_ENDPOINT',
        bucket: 'SPACES_BUCKET',
        region: 'SPACES_REGION',
      },
    },

    gcs: {
      driver: 'gcs',
      config: {
        keyFilename: 'GCS_KEY',
        bucket: 'GCS_BUCKET',
      },
    },
  },
}
