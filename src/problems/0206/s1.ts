import type { ListNode } from "@/utils/list-node";

// listnode

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let curr = head;

  while (curr) {
    const tmp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tmp;
  }
  return prev;
}
