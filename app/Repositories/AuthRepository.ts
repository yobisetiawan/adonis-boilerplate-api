import BaseRepository from './BaseRepository'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RegisterUserValidator from 'App/Validators/RegisterUserValidator'
import User from 'App/Models/User'

export default class AuthRepository extends BaseRepository {
  public async loginProcess({ auth, request }: HttpContextContract) {
    return await auth.use('api').attempt(request.input('email'), request.input('password'))
  }

  public async logoutProcess({ auth }: HttpContextContract) {
    await auth.use('api').revoke()
    return { logout: true }
  }

  public async registerProcess({ auth, request }: HttpContextContract) {
    const payload = await request.validate(RegisterUserValidator)
    const user = await User.create(payload, { client: this.trx })
    return await auth.use('api').generate(user, { name: 'personal_api' })
  }
}
