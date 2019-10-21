import http from './http'
import _ from 'lodash/fp/object'
import { Message } from 'element-ui'
export default class BaseModel {
  constructor(props) {
    // 用来new this绑定数据 defaults 可能有一些默认配置
    Object.assign(this, this.defaults, props)
  }

  static async findAll(params = {}, path = '', method = 'get') {
    const httpConfig = {
      url: `${path}`,
      method,
      params
    }
    try {
      const res = await http(httpConfig)
      const data = res.data.data || []

      let list = Array.isArray(data)
        ? data
        : data.items
        ? data.items
        : _.values(data)

      if (!Array.isArray(list)) return list
      list = list.map(type => {
        return new this(type)
      })
      
      return data._meta
        ? Object.assign(list, {
            // 总数据量，用于分页
            total: data._meta.totalCount
          })
        : list
    } catch (e) {
      console.error(e.message)
    }
  }

  /**
   * 不含分页等信息
   * @param {*} params 
   * @param {*} path 
   * @param {*} method 
   */
  static async getAll(params = {}, path = '', method = 'get') {
    const httpConfig = {
      url: `${path}`,
      method,
      params
    }
    try {
      const res = await http(httpConfig)
      const data = res.data.data || []

      let list = Array.isArray(data)
        ? data
        : data.items
        ? data.items
        : _.values(data)

      if (!Array.isArray(list)) return list
      list = list.map(type => {
        return new this(type)
      })
      
      return list
    } catch (e) {
      console.error(e.message)
    }
  }

  /**
   * 通过 params 寻找某个实例
   */
  static async find(params = {}, url, headers = {}) {
    try {
      const res = await http.get(`${url}`, {
        params,
        headers
      })
      return new this(
        res.data.data instanceof Object
          ? res.data.data[0]
            ? res.data.data[0]
            : res.data.data
          : res.data
      )
    } catch (e) {
      console.error(e)
    }
  }

  /**
   * 在数据库中创建当前实例
   */
  async create(
    options = {
      alertOnError: true,
      alertOnSuccess: true,
      url: ''
    }
  ) {
    const url = options.url || this.createUrl

    try {
      var res
      await http.post(url, this).then(function (response) {
        res = response 
      })
      .catch(function (error) {
          res = error.response 
      })

      if (res.data.code === 200) {
        Message.success('保存成功')
      }
      Object.assign(this, res.data)
      return res.data
    } catch (e) {
      // this.constructor.handlerError(e, options)
      console.log(e)
    }
  }

  async update(
    options = {
      alertOnError: true,
      alertOnSuccess: true,
      url: ''
    }
  ) {
    const url = options.url || this.updateUrl
    try {
      const res = await http.put(url, this)
      console.log(res)
      if (res.data && res.data.code === 200) {
        Message.success('保存成功')
      }
      Object.assign(this, res.data)

      return res.data
    } catch (e) {
      console.log(e)
    }
  }
  /**
   * 在数据库中删除当前实例
   */
  async delete(
    options = {
      alertOnError: true,
      alertOnSuccess: true,
      url: ''
    }
  ) {
    const url = options.url || this.deleteUrl
    try {
      const res = await http.delete(url, this)
      if (res.data.code === 200) {
        Message.success('删除成功')
      }
      Object.assign(this, res.data)

      return res.data
    } catch (e) {
      console.log(e)
    }
  }
}
