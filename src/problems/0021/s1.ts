import { ListNode } from "@/utils/list-node";

// listnode

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const dummy = new ListNode();
  dummy.next = list1;

  let curr = dummy;
  let p1 = list1;
  let p2 = list2;
  while (p1 && p2) {
    if (p1.val < p2.val) {
      curr.next = p1;
      p1 = p1.next;
    } else {
      curr.next = p2;
      p2 = p2.next;
    }
    curr = curr.next;
  }

  if (p1) {
    curr.next = p1;
  }
  if (p2) {
    curr.next = p2;
  }
  return dummy.next;
}
