export type CardViewType = 'card' | 'trend'

export type CardType = {
  _id?: any
  title: string
  thumbnail: string
  year: number
  category: string
  rating: string
  isTrending: boolean
}

export interface ISignInRequest {
  email: string
  password: string
}

export interface ISignUpRequest extends ISignInRequest {
  rePassword: string
}

export type UserRoleType = 'admin' | 'user'

export type UserType = {
  _id: string
  avatar: string
  bookmarks?: string[]
  email: string
  role: UserRoleType
  __v?: number
}

export type ErrorType = {
  location: string
  msg: string
  path: 'password' | 'email' | 'text' | 'tel'
  type: string
  value: string
}

export type UserResponseType = {
  accessToken: string
  user: UserType
  errors?: ErrorType[]
  field?: string
  msg?: string
}

export type ServerResponseType<T> = {
  data: T
  msg: string
  count?: number
}
