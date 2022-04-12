class Node {
    constructor(data) {
        this.data = data
        this.fPointer = null
        this.bPointer = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    find(data) {
        let current = this.head
        while (current !== null) {
            if (current.data === data) {
                return current
            } else {
                current = current.fPointer
            }
        }
        return
    }

    // adds a node to the end of the list
    append(data) {
        let newNode = new Node(data)
        if (this.tail === null && this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.bPointer = this.tail
            this.tail.fPointer = newNode
            this.tail = newNode
        }
    }

    // adds a node to the beginning of the list
    drive(data) {
        let newNode = new Node(data)
        if (this.tail === null && this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.fPointer = this.head
            this.head.bPointer = newNode
            this.head = newNode
        }
    }

    // adds a node to the middle of the list or as close to the middle it can
    pitch(data) {
        let newNode = new Node(data)
        let fCurrent = this.head
        let bCurrent = this.tail
        while (fCurrent !== bCurrent && (fCurrent.fPointer !== bCurrent || bCurrent.bPointer !== fCurrent)) {
            fCurrent = fCurrent.fPointer
            bCurrent = bCurrent.bPointer
        }

        if (bCurrent === fCurrent) {
            newNode.fPointer = bCurrent.fPointer
            newNode.bPointer = bCurrent
            bCurrent.fPointer.bPointer = newNode
            bCurrent.fPointer = newNode
        } else {
            newNode.fPointer = bCurrent
            newNode.bPointer = fCurrent
            bCurrent.bPointer = newNode
            fCurrent.fPointer = newNode
        }
    }

    printList() {
        let list = []
        let current = this.head
        while (current !== null) {
            list.push(current.data)
            current = current.fPointer
        }
        console.log(list)
    }

    delete(data) {
        let toDelete = this.find(data)
        toDelete.bPointer.fPointer = toDelete.fPointer
        toDelete.fPointer.bPointer = toDelete.bPointer
        toDelete = null
    }
}

let lolList = new LinkedList
lolList.append(2)
lolList.append(3)
lolList.append(5)
lolList.append(4)
lolList.pitch(7)
lolList.pitch(10)
lolList.pitch(11)
lolList.printList()