import pytest

from linked_list import Node
from linked_list import LinkedList


class TestNode:
    def test_get_data(self):
        node = Node(1)
        assert node.get_data() == 1

    def test_get_next_and_get_next(self):
        """should be ok"""
        node1 = Node(1)
        node2 = Node(2)
        node1.set_next(node2)
        node = node1.get_next()
        assert node.get_data() == 2


class TestLinkedList(object):
    def test_size(self):
        list = LinkedList()
        list.insert(1)
        list.insert(2)
        assert list.size() == 2
