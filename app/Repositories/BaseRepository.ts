import Database, { TransactionClientContract } from '@ioc:Adonis/Lucid/Database'

export default class BaseRepository {
  public trx: TransactionClientContract

  public async DBSafe(func: () => any, callback?: (data) => any) {
    this.trx = await Database.transaction()
    try {
      const data = await func()
      await this.trx.commit()
      if (callback) {
        return await callback(data)
      }
      return data
    } catch (error) {
      await this.trx.rollback()
      throw error
    }
  }
}
