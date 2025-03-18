/*
 * @lc app=leetcode id=707 lang=javascript
 *
 * [707] Design Linked List
 */

// @lc code=start

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};
/**
 *
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let cur = this.head;
  for (let i = 0; i < index; i++) {
    cur = cur.next;
  }
  return cur.val
};

/**
 * 加到头部
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newVal = {
    next: null,
    val,
  };

  newVal.next = this.head;
  this.head = newVal;
  this.size++;
};

/**
 * 指针走到最后一个，然后将最后一个节点的next指向新节点
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  if (this.size === 0) return this.addAtHead(val);
  const newVal = {
    next: null,
    val,
  };
  let cur = this.head;
  while (cur.next) {
    cur = cur.next; // 最后一个
  }
  cur.next = newVal;
  this.size++;
};

/**
 *
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return -1;
  if (index === 0) return this.addAtHead(val);
  const newVal = {
    next: null,
    val,
  };
  let cur = this.head;
  for (let i = 0; i < index - 1; i++) {
    // 找到插入的前一个节点
    cur = cur.next;
  }
  newVal.next = cur.next;
  cur.next = newVal;
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return -1;
  if(!this.head) return null
  if(index === 0) {
    const temp = this.head
    this.head = this.head.next
    this.size --
    return temp.val
  }
  let cur = this.head;
  for (let i = 0; i < index - 1; i++) {
    // 找到删除的前一个节点
    cur = cur.next;
  }
  const temp = cur.next // 删除的点
  cur.next = cur.next.next
  this.size--
  return temp.val
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
