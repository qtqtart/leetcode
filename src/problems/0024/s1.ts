import { ListNode } from "@/utils/list-node";

// listnode

function swapPairs(head: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    dummy.next = head;

    let curr = dummy;
    while (curr.next && curr.next.next) {
        const l = curr.next;
        const r = curr.next.next;

        l.next = r.next;
        r.next = l;
        curr.next = r;
        curr = l;
    }
    return dummy.next;
};