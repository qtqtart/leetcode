import { ListNode } from "@/utils/list-node";

class MyLinkedList {
  public head: ListNode | null;
  public size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  get(index: number): number {
    if (index < 0 || index >= this.size) {
      return -1;
    }

    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr.val;
  }

  addAtHead(val: number): void {
    const node = new ListNode(val);
    node.next = this.head;

    this.head = node;
    this.size++;
  }

  addAtTail(val: number): void {
    const node = new ListNode(val);
    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) {
      return;
    }

    const node = new ListNode(val);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr!.next;
      }
      node.next = curr!.next;
      curr!.next = node;
    }
    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      curr.next = curr.next.next;
    }
    this.size--;
  }
}
