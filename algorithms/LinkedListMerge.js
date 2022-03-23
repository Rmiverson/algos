function mergeLists(head1, head2) {
    //my solution based off of cagils
    if (!head1) {
        return head2
    }
    if (!head2) {
        return head1
    }
        
    if (head1.data < head2.data) {
        let newNode = new SinglyLinkedListNode
        newNode.data = head1.data
        newNode.next = mergeLists(head1.next, head2)
        return newNode
    } else {
        let newNode = new SinglyLinkedListNode
        newNode.data = head2.data
        newNode.next = mergeLists(head1, head2.next)
        return newNode
    }   
}