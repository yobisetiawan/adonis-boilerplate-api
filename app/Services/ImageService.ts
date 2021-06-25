import sharp from 'sharp'

export interface IresizeOption {
  height: number
  width: number
}

export class ImageService {
  public async resizeImage(file: any, option: IresizeOption) {
    if (file) {
      return await sharp(file.tmpPath).resize(option.height, option.width).toBuffer()
    }
  }
}
