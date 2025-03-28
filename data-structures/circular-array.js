class CycleArray {
  constructor(size = 1) {
    this.count = 0;
    this.arr = new this.Array(size);
    this.size = size;
    this.start = 0;
    this.end = 0;
  }
  resize(newSize) {
    // 创建新的数组
    var newArr = new Array(newSize);
    // 将旧数组的元素复制到新数组中
    for (var i = 0; i < this.count; i++) {
      newArr[i] = this.arr[(this.start + i) % this.size];
    }
    this.arr = newArr;
    // 重置 start 和 end 指针
    this.start = 0;
    this.end = this.count;
    this.size = newSize;
  }
  addFirst(val) {
    if (this.isFull()) {
      this.resize(this.size * 2);
    }
    this.start = (this.start - 1 + this.size) % this.size;
    this.arr[this.start] = val;
    this.count++;
  }
  removeFirst() {
    if (this.isEmpty()) {
      throw new Error("Array is empty");
    }
    this.arr[this.start] = null;
    this.start = (this.start + 1 + this.size) % this.size;
    this.count--;
    if (this.count > 0 && this.count == this.size / 4) {
      this.resize(this.size / 2);
    }
  }
  addLast(val) {
    if (this.isFull()) {
      this.resize(this.size * 2);
    }
    this.arr[this.end] = val;
    this.end = (this.end + 1) % this.size;
    this.count++;
  }
  removeLast() {
    if (this.isEmpty()) {
      throw new Error("Array is empty");
    }
    this.end = (this.end - 1 + this.size) % this.size;
    this.end = null;
    this.size--;
    if (this.count > 0 && this.count == this.size / 4) {
      this.resize(this.size / 2);
    }
  }
  getFirst() {
    if (this.isEmpty()) {
      throw new Error("Array is empty");
    }
    return this.arr[this.start];
  }

  // 获取数组尾部元素，时间复杂度 O(1)
  getLast() {
    if (this.isEmpty()) {
      throw new Error("Array is empty");
    }
    // end 是开区间，指向的是下一个元素的位置，所以要减 1
    return this.arr[(this.end - 1 + this.size) % this.size];
  }

  isFull() {
    return this.count === this.size;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }
  addIndex(idx, val) {

  }
  removeIndex(idx) {

  }
  getIndex(idx) {

  }
}
