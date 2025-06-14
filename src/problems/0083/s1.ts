import type { ListNode } from "@/utils/list-node";

// linked-list

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}
