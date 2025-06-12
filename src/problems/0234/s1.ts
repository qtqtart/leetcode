import type { ListNode } from "@/utils/list-node";

// list node

function getMiddle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function reverse(head: ListNode | null): ListNode | null {
  let prev = null;
  let curr = head;

  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}

function isPalindrome(head: ListNode | null): boolean {
  let half1 = head;
  let half2 = reverse(getMiddle(head));

  while (half1 && half2) {
    if (half1.val !== half2.val) {
      return false;
    }
    half1 = half1.next;
    half2 = half2.next;
  }
  return true;
}
