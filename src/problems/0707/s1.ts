class Node {
  public key: number;
  public val: number;
  public next: Node | null;

  constructor(key?: number, val?: number, next?: Node | null) {
    this.key = key !== undefined ? key : 0;
    this.val = val !== undefined ? val : 0;
    this.next = next !== undefined ? next : null;
  }
}

class LinkedList {
  public head: Node | null;
  public size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  get(key: number): number {
    let curr = this.head;
    while (curr) {
      if (curr.key === key) {
        return curr.val;
      }
      curr = curr.next;
    }
    return -1;
  }

  put(key: number, val: number): void {
    let curr = this.head;
    while (curr) {
      if (curr.key === key) {
        curr.val = val;
        return;
      }
      curr = curr.next;
    }

    const node = new Node(key, val, this.head);
    this.head = node;
    this.size++;
  }

  remove(key: number): void {
    if (!this.head) {
      return;
    }

    if (this.head.key === key) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let prev = this.head;
    let curr = this.head.next;
    while (curr) {
      if (curr.key === key) {
        prev.next = curr.next;
        this.size--;
        return;
      }
      prev = curr;
      curr = curr.next;
    }
  }
}

class MyHashMap {
  private n: number;
  private buckets: LinkedList[];

  constructor() {
    this.n = 13;
    this.buckets = [];

    for (let i = 0; i < this.n; i++) {
      this.buckets[i] = new LinkedList();
    }
  }

  put(key: number, val: number): void {
    this.buckets[this.hash(key)].put(key, val);
  }

  get(key: number): number {
    return this.buckets[this.hash(key)].get(key);
  }

  remove(key: number): void {
    this.buckets[this.hash(key)].remove(key);
  }

  private hash(key: number): number {
    return key % this.n;
  }
}
