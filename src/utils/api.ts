//missing TextEndcoder when using this 'ky' package => replace with axios

import axios, {
  type AxiosRequestConfig,
  type AxiosRequestHeaders,
  type Method,
  type ResponseType
} from 'axios'
// import ky, { HTTPError, type Options } from 'ky'
// export type Primitive =
//   | null
//   | undefined
//   | string
//   | number
//   | boolean
//   | symbol
//   | bigint

// export type LiteralUnion<
//   LiteralType extends BaseType,
//   BaseType extends Primitive
// > = LiteralType | (BaseType & { _?: never })

// type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete'

// export type KyHeadersInit =
//   | NonNullable<RequestInit['headers']>
//   | Record<string, string | undefined>

export type ApiParams = {
  url: string
  method: Method
  data?: unknown
  unmountSignal?: AbortSignal
  headers?: Partial<AxiosRequestHeaders>
  responseType?: ResponseType
}

const api = async <T>({
  url,
  method,
  data,
  unmountSignal,
  headers,
  ...rest
}: ApiParams): Promise<T> => {
  // const options: Options = {
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //     ...headers
  //   },
  //   json: data,
  //   method,
  //   prefixUrl: 'https://pokeapi.co/api/v2/',
  //   retry: 0,
  //   signal: unmountSignal,
  //   ...rest
  // }
  const request = {
    baseURL: 'https://pokeapi.co/api/v2/',
    url,
    method,
    data,
    signal: unmountSignal,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers
    },
    ...rest
  }
  try {
    // const response = await ky(url, options)
    // return response.json()
    return await axios(request as AxiosRequestConfig).then((res) => res?.data)
  } catch (error) {
    console.log('error', error)
    throw error
  }
}

export default api
