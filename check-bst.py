""" Node is defined as
class node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
"""

def checkBST(root):
    return checkBst(root, float('-inf'), float('inf'))

def checkBst(node, min, max):
    if(node == None):
        return True
    return min < node.data and node.data < max and checkBst(node.left, min, node.data) and checkBst(node.right, node.data, max)