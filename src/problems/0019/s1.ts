import { ListNode } from "@/utils/list-node";

// linked-list

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode();
  dummy.next = head;

  let slow = dummy;
  let fast = dummy;

  for (let i = 0; i < n + 1; i++) {
    fast = fast.next;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
}
