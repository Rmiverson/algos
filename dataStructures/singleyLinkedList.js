class Node {
    constructor(data) {
        this.data = data
        this.pointer = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    
    find(data) {
        let current = this.head
        while (current.data !== data) {
            if (current.pointer === null) {
                return // fails to find node with data
            } else {
                current = current.pointer
            }
        }
        return current
    }

    insert(data, insertAfterData){
        let before = this.find(insertAfterData)
        if (before !== null) {
            let newNode = new Node(data)
            newNode.pointer = before.pointer
            before.pointer = newNode
        }
    }

    delete(data) {
        let toDelete = this.find(data)
        let current = this.head
        while (current.pointer !== toDelete) {
            if (current.pointer === null) {
                return
            } else {
                current = current.pointer
            }
        }
        current.pointer = toDelete.pointer
        toDelete = null
    }

    append(data) {
        let current = this.head

        if (current === null) {
            this.head = new Node(data, null)
        }

        while (current !== null) {
            if (current.pointer === null) {
                current.pointer = new Node(data, null)
                return
            }
            current = current.pointer
        }
        return
    }

    printList() {
        let list = []
        let current = this.head
        while (current !== null) {
            list.push(current.data)
            current = current.pointer
        }
        console.log(list)
    }
}

let lolList = new LinkedList
lolList.append(3)
lolList.append(3)
lolList.append(4)
lolList.append(3)
lolList.insert(5, 4)
lolList.printList()
lolList.delete(5)
lolList.printList()