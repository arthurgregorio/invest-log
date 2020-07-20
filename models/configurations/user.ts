import { PersistentEntity } from '../persistent-entity'

export class User extends PersistentEntity {
  name!: string
  username!: string
  email!: string
}
