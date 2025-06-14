import type { ListNode } from "@/utils/list-node";

// linked-list

function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head.next) {
    return null;
  }

  let slow = head;
  let fast = head.next.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow.next = slow.next.next;
  return head;
}
