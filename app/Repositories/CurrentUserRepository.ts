import BaseRepository from './BaseRepository'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CurrentUserRepository extends BaseRepository {
  public async getDetails({ auth }: HttpContextContract) {
    return await auth.use('api').authenticate()
  }
}
