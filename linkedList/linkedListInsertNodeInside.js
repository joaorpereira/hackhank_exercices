class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
const list = {
  data: 16,
  next: { data: 13, next: { data: 73, next: null } },
};

function linkedListInsertNodeInside(head, data, position) {
  let counter = 1;
  let newnode = new SinglyLinkedListNode(data);
  let node = head;

  if (position == 0) {
    node = new SinglyLinkedListNode(data);
    node.next = head;
  }

  while (counter != position) {
    node = node.next;
    counter += 1;
  }

  newnode.next = node.next;
  node.next = newnode;

  while (head) {
    console.log(head.data);
    head = head.next;
  }

  return head;
}
linkedListInsertNodeInside(list, 34, 1);
