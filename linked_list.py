class Node(object):
    def __init__(self, data=None, next_node=None):
        self.data = data
        self.next = next_node

    def get_data(self):
        return self.data

    def set_next(self, new_next):
        self.next_node = new_next

    def get_next(self):
        return self.next_node


class LinkedList:
    def __init__(self, head=None):
        self.head = head

    def insert(self, data):
        new_node = Node(data)
        new_node.set_next(self.head)
        self.head = new_node

    def size(self):
        current = self.head
        count = 0
        while current:
            count += 1
            current = current.get_next()
        return count

    def display(self):
        current = self.head
        while current:
            print(current.get_data(), end=' ')
            current = current.get_next()
        print()

    def search(self, data):
        current = self.head
        found = False
        while current and found is False:
            if(current.gerData() == data):
                found = True
            else:
                current = current.get_next()
        if current is None:
            raise ValueError("Data is not in the List")
        return current

    def has_cycle(self):
        head = self.head
        if head is None:
            return False
        slow = fast = head
        while (slow or fast or fast.next):
            if fast.next is None:
                return False
            if slow == fast.next or slow == fast.next.next:
                return True
            slow = slow.next
            fast = fast.next.next
        return False



# list = LinkedList()
# list.insert(1)
# list.insert(2)
# list.insert(3)
# list.insert(2)
# print(list.size())
# list.display()
# print(list.has_cycle())