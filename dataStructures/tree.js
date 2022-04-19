class Node {
    constructor(key, value) {
        this.key = key
        this.data = value
        bPointer = null
        left = null
        right = null
    }

    insertAfter(node) {
        if (this.data >= node.data) {
            if (this.left === null) {
                this.left = node
            } else {
                this.left.insertAfter(node)
            }
        } else {
            if (this.right === null) {
                this.right = node
            } else {
                this.right.insertAfter(node)
            }
        }
    }
}

class Tree {
    constructor() {
        this.head = null
        this.size = 0
    }

    insert(key, value) {
        newNode = new Node(key, value)

        if (this.size === 0) {
            this.head = newNode
        } else {
            this.head.insertAfter(newNode)
        }
        this.size++
    }
}