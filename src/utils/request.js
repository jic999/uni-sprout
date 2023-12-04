/**
 * @typedef {'GET' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'HEAD' | 'OPTIONS' | 'TRACE'} RequestMethods
 */

/**
 * @typedef {object} RequestResult
 * @property {number} code - 请求结果的状态码
 * @property {string} msg - 请求结果的消息
 * @property {Error} [err] - 请求可能发生的错误
 * @property {*} data - 请求返回的数据
 */

const BASE_URL = 'http://localhost:3000'

/**
 *
 * @param {RequestMethods} method
 * @param {string} url
 * @param {any} [data]
 * @param {UniNamespace.RequestOptions} [options]
 * @returns {Promise<RequestResult>}
 */
export function req(method, url, data, options) {
  if (!url.startsWith('http'))
    url = BASE_URL + url

  return new Promise((resolve) => {
    uni.request({
      method,
      url,
      data,
      ...options,
      success: (res) => {
        const { data } = res
        if (res.statusCode !== 200)
          resolve({ ...data, err: new Error(data.msg ?? '请求失败') })
        resolve(data)
      },
      fail: (err) => {
        resolve({ err })
      },
    })
  })
}
