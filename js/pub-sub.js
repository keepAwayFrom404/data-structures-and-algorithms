/**
 * 发布订阅模式
 * 
 */

class EventBus {
  constructor() {
    this.events = {}
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new Set();
    }
    this.events[eventName].add(callback);
  }
  off(eventName, callback) {
    if (!this.events[eventName]) return;
    this.events[eventName].delete(callback);
  }
  once(name, cb) {
    const wrapper = (args) => { // 执行一次之后删除本订阅
      cb(args)
      this.off(name, wrapper)
    }
    this.on(name, wrapper)
  }
  emit(eventName, args) {
    if (!this.events[eventName]) return;
    for (const cb of this.events[eventName]) {
      cb(args);
    }
  }
}