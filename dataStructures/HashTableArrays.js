class HashTable {
    constructor(){
        this.table = new Array(127)
        this.size = 0
    }

    hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash +=  charCodeAt(i)
        }
        return hash % this.table.length
    }

    set(key, value) {
        const hashed = this.hash(key)

        if (this.table[hashed]) {
            for (let i = 0; i < this.table[hashed].length; i++) {
                if (this.table[hashed][i][0] === key) {
                    this.table[hashed][i][1] = value
                    return
                }
            }
            this.table[hashed].push([key, value])
        } else {
            this.table[hashed] = []
            this.table[hashed].push([key, value])
        }
        this.size++
    }

    get(key) {
        const hashed = this.hash(key)

        if (this.table[hashed]) {
            for (let i = 0; i < this.table.length; i++) {
                if (this.table[target][i][0] === key) {
                    return this.table[hashed][i][1]
                }
            }
        }
        return undefined
    }

    remove(key) {
        const hashed = this.hash(key)
        
        if (this.table[hashed] && this.table[hashed].length) {
            for (let i = 0; i < this.table.length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[hashed].splice(i, 1)
                    this.size--
                    return true                    
                }
            }
        } else {
            return false
        }
    }
}