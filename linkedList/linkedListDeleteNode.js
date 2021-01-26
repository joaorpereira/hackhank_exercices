const list = {
  data: 20,
  next: {
    data: 6,
    next: {
      data: 2,
      next: {
        data: 19,
        next: {
          data: 7,
          next: { data: 4, next: { data: 15, next: { data: 9, next: null } } },
        },
      },
    },
  },
};

function linkedListDeleteNode(head, position) {
  let counter = 0;
  let node = head;
  let prevNode = head;

  if (position == 0) {
    head = head.next;
    return head;
  }

  while (counter < position) {
    prevNode = node;
    node = node.next;
    counter++;
  }

  prevNode.next = node.next ? node.next : null;
  node = null;

  while (head) {
    console.log(head.data);
    head = head.next;
  }

  return head;
}

linkedListDeleteNode(list, 3);
