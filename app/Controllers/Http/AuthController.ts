import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import AuthRepository from 'App/Repositories/AuthRepository'

export default class AuthController {
  private repo: AuthRepository

  constructor() {
    this.repo = new AuthRepository()
  }

  public async login(req: HttpContextContract) {
    return this.repo.loginProcess(req)
  }

  public async logout(req: HttpContextContract) {
    return this.repo.logoutProcess(req)
  }

  public async register(req: HttpContextContract) {
    return this.repo.DBSafe(() => this.repo.registerProcess(req))
  }
}
