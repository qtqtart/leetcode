class Node {
  value: number;
  next: Node | null;

  constructor(value: number = 0, next: Node | null = null) {
    this.value = value;
    this.next = next;
  }
}

class MyLinkedList {
  public head: Node | null;
  public length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  get(index: number): number {
    if (index < 0 || index >= this.length) {
      return -1;
    }

    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr!.next;
    }
    return curr!.value;
  }

  addAtHead(val: number): void {
    this.addAtIndex(0, val);
  }

  addAtTail(val: number): void {
    this.addAtIndex(this.length, val);
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.length) {
      return;
    }

    const newNode = new Node(val);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr!.next;
      }
      newNode.next = curr!.next;
      curr!.next = newNode;
    }
    this.length++;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.length) {
      return;
    }

    if (index === 0) {
      this.head = this.head!.next;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr!.next;
      }
      curr!.next = curr!.next!.next;
    }
    this.length--;
  }
}
