export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val !== undefined ? val : 0;
    this.next = next !== undefined ? next : null;
  }
}
