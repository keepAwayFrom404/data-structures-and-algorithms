class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prevv = null;
  }
}
class MyLinkedList {
  constructor(arr) {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }
  createNode(value) {
    return {
      value,
      next: null,
      prev: null,
    };
  }
  addFirst(value) {
    const temp = new Node(value);
    this.head.next.prev = temp;
    temp.next = this.head.next;
    temp.prev = this.head;
    this.head.next = temp;
    this.size++;
  }
  addLast(value) {
    const temp = new Node(value);
    this.tail.prev.next = temp;
    temp.prev = this.tail.prev;
    temp.next = this.tail;
    this.tail.prev = temp;
    this.size++;
  }
  add(index, value) {
    this.checkPositionIndex(index);
    if (index === 0) {
      return this.addFirst(value);
    }
    if (index === this.size) {
      return this.addLast(value);
    }
    const temp = new Node(value);
    const cur = this.getNode(index);
    temp.next = cur;
    cur.prev.next = temp;
    temp.prev = cur.prev;
    cur.prev = temp;
    this.size++;
  }
  getNode(index) {
    this.checkElementIndex(index);
    let cur = this.head.next;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    return cur;
  }
  removeLast() {}
  removeFirst() {}
  remove(index) {}
  set(index, value) {}
  get(index) {}
  checkPositionIndex(index) {
    if (index < 0 || index > this.size) { // 新增可以为size
      throw new Error("position out of range");
    }
  }
  checkElementIndex(index) { // 删除不能为size
    if (index < 0 || index >= this.size) {
      throw new Error("index out of range");
    }
  }
  size() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }
  display() {
    console.log(`size = ${this.size}`);
    let p = this.head.next;
    let str = "";
    while (p !== this.tail) {
        str += `${p.val} <-> `;
        p = p.next;
    }
    console.log(str + "null\n");
  }
}
