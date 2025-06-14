/**
 * 使用给定的数据对象填充字符串模板。
 * @param {string} template - 包含占位符的字符串模板，占位符通常以特定格式表示，如 ${key}。
 * @param {Object} data - 包含键值对的对象，用于替换模板中的占位符。
 * @returns {string} - 替换占位符后的最终字符串。
 */

function stringTemplate(template, data) {
  return template.replace(/\${([^}]*)}/g, (_,key, value) => data[key])
}

const template = '我是${name}，年龄${age}，性别${sex}';
const person = {
    name: '布兰',
    age: 12,
    sex: '女'
}


console.log(stringTemplate(template, person));