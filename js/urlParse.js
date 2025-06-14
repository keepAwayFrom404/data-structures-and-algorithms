const temp = 'https://juejin.cn/post/6946022649768181774#heading-11?c=3&d=4'
/**
 * 解析url查询参数：可能存在于search中或者hash中
 * @param {string} url 需要解析的url
 */

function urlParamToObj(params) {
  return params?.split('&').reduce((pre,cur) => {
    const [key, val] = cur.split('=')
    pre[key] = decodeURIComponent(val)
    return pre
  }, {}) || {}
}

function urlParamToObj2(params = '') {
  const result = {}
  params.replace(/([^=&]+)=([^&]*)/g, (_,key, value) =>result[key] = decodeURIComponent(value))
  return result
}

function urlParse(url = location.href) {
  const search = url.split('#')[0].split('?')[1]
  const hashSearch = url.split('#')[1].split('?')[1]
  // return Object.assign(urlParamToObj(search), urlParamToObj(hashSearch))
  return Object.assign(urlParamToObj2(search), urlParamToObj2(hashSearch))
}
console.log(urlParse(temp));