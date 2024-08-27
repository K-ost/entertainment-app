import { UserResponseType } from "../types"

// getData
type GetDataType = {
  body?: BodyInit | null | undefined
  method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'
  token?: string
  url: string
}

export const API_URL: string = 'http://localhost:8000/api'

export async function getData<T>({ body = null, method = 'GET', token, url }: GetDataType): Promise<T | undefined> {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body
    })
    const data = await response.json()
    
    return data
  } catch (e) {
    console.log(e)
  }
}

export function getError(data: UserResponseType, field: 'email' | 'password' | 'rePassword'): string {
  let output = ''
  if (data && data.errors) {
    const foundError = data.errors.find(el => el.path === field)!
    output = foundError && foundError.msg
  }
  if (data && data.field && data.field === field) {
    output = data.msg!
  }
  return output
}
