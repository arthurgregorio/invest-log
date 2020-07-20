import { PersistentEntity } from '../persistent-entity'

import { Currency } from './currency'

export class Stock extends PersistentEntity {
  ticker!: string
  buyValue!: number

  currency: Currency

  constructor() {
    super()
    this.currency = Currency.BRL
  }
}
