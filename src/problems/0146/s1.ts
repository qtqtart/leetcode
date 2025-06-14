// lrucache

class Node {
  public key: number;
  public val: number;
  public prev: Node | null;
  public next: Node | null;

  constructor(key?: number, val?: number) {
    this.key = key !== undefined ? key : 0;
    this.val = val !== undefined ? val : 0;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  private capacity: number;
  private map: Map<number, Node>;
  public head: Node;
  public tail: Node;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node();
    this.tail = new Node();

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    const node = this.map.get(key);
    if (!node) {
      return -1;
    }

    this.remove(node);
    this.addToHead(node);
    return node.val;
  }

  put(key: number, val: number): void {
    const node = this.map.get(key);
    if (node) {
      node.val = val;
      this.remove(node);
      this.addToHead(node);
      return;
    }

    if (this.map.size >= this.capacity) {
      const node = this.tail.prev;
      this.map.delete(node.key);
      this.remove(node);
    }

    const newNode = new Node(key, val);
    this.addToHead(newNode);
    this.map.set(key, newNode);
    return;
  }

  remove(node: Node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  addToHead(node: Node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }
}
