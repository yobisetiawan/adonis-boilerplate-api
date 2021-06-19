import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import AuthRepository from 'App/Repositories/AuthRepository'

export default class AuthController {
  private repo: AuthRepository

  constructor() {
    this.repo = new AuthRepository()
  }

  public async login(http: HttpContextContract) {
    return this.repo.loginProcess(http)
  }

  public async logout(http: HttpContextContract) {
    return this.repo.logoutProcess(http)
  }

  public async register(http: HttpContextContract) {
    return this.repo.DBSafe(() => this.repo.registerProcess(http))
  }
}
