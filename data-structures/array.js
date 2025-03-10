class arrayList {
  constructor(capacity = 10) {
    this.size = 0;
    this.data = new Array(capacity);
    this.capacity = capacity;
  }
  resize(cap) {
    const temp = new Array(cap);
    for (let i = 0; i < this.size; i++) {
      temp[i] = this.data[i];
    }
    this.data = temp;
    this.capacity = cap;
  }
  checkElemenetIndex(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('index is out of range');
    }
  }
  checkPositionIndex(index) { // 插入检测
    if (index < 0 || index > this.size) {
      throw new Error('position index is out of range');
    }
  }
  addLast(element) {
    if(this.size === this.data.length) {
      this.resize(this.size * 2);
    }
    this.data[this.size++] = element;
  }
  add(index, element) {
    this.checkPositionIndex(index);
    if(this.size === this.data.length) {
      this.resize(this.size * 2);
    }
    for (let i = this.size - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[index] = element;
    this.size++;
  }
  deleteLast() {
    if (this.isEmpty()) {
      throw new Error('array is empty');
    }
    const temp = this.data[this.size - 1];
    this.data[this.size - 1] = null;
    this.size--;
    if(this.size <= this.data.length / 4) {
      this.resize(Math.floor(this.data.length / 2));
    }
  }
  delete(index) {
    this.checkElemenetIndex(index);
    for (let i = index; i < this.size - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    this[this.size - 1] = null;
    this.size--;
    if(this.size <= this.data.length / 4) {
      this.resize(Math.floor(this.data.length / 2));
    }
  }
  get(index) {
    this.checkElemenetIndex(index);
    return this.data[index];
  }
  set(index, element) {
    this.checkElemenetIndex(index);
    this.data[index] = element;
  }
  isEmpty() {
    return this.size === 0; 
  }
  display() {
    console.log(`size:${this.size};
      cap:${this.data.length};
      data: ${this.data}`);
  }
}

const arr = new arrayList(10);
arr.addLast(1)
arr.add(1,3)
arr.deleteLast()
arr.delete(0)
arr.add(0,1)
arr.addLast(2)
arr.addLast(3)
console.log(arr.get(0))
arr.set(0, 4)

arr.display();