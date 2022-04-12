class Node {
    constructor(key, data) {
        this.data = data
        this.key = key
        this.fPointer = null
        this.bPointer = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    find(key) {
        let current = this.head
        while (current !== null) {
            if (current.key === key) {
                return current
            } else {
                current = current.fPointer
            }
        }
        return
    }

    // adds a node to the end of the list
    append(key, data) {
        let newNode = new Node(key, data)
        if (this.tail === null && this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.bPointer = this.tail
            this.tail.fPointer = newNode
            this.tail = newNode
        }
    }

    delete(key) {
        let toDelete = this.find(key)
        toDelete.bPointer.fPointer = toDelete.fPointer
        toDelete.fPointer.bPointer = toDelete.bPointer
        toDelete = null
    }
}

class HashTable {
    constructor() {
        this.table = new Array(127)
        this.size = 0
    }

    hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash += charCodeAt(i)
        }
        return hash % this.table.length
    }

    set(key, value) {
        let hashed = this.hash(key)
        let tablePosition = this.table[hashed]

        if (tablePosition.length === 0) {
            tablePosition = new LinkedList
            tablePosition.append(key, value)
            this.size++
        } else if (tablePosition.find(key) !== undefined) {
            tablePosition.data = value
        } else {
            tablePosition.append(key, value)
            this.size++
        }
    }

    get(key) {
        let hashed = this.hash(key)
        return this.table[hashed].find(key)
    }

    remove(key) {
        let hashed = this.hash(key)
        this.table[hashed].delete(key)
        this.size--
    }
}