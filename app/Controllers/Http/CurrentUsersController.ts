import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import CurrentUserRepository from 'App/Repositories/CurrentUserRepository'

export default class CurrentUsersController {
  private repo: CurrentUserRepository

  constructor() {
    this.repo = new CurrentUserRepository()
  }

  public async show(http: HttpContextContract) {
    return this.repo.getDetails(http)
  }
}
