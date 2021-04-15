// singly linked lists
// ListNode class: we'll be using this

class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
      // this.prev = null; - for doubly-linked lists
    }
  }

// var new_node = new ListNode(7);
// var second_node = new ListNode(3);
// new_node.next = second_node;
// var third_node = new ListNode(4);
// second_node.next = third_node;
// console.log(new_node.next.next.value);

  
// and our SLL class
// we'll be using this... all week
// have you been saving what you do for algos locally if you're not
// the person writing it? maybe you should be?

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // all our methods go here:
    // addToFront(value)
    // create a new node with the given value and make it
    // the head of the list
    addToFront(value) {
        var new_node = new ListNode(value);

        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }
        
        else {
            new_node.next = this.head;
            this.head = new_node;
        }
    }

    // addToBack(value)
    // create a new node with the given value and make it
    // the new tail of the list
    addToBack(value) {
        var new_node = new ListNode(value);

        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
    }

    // display()
    // return a string with the value of every node from the
    // linked list - like "3 - 7 - 13 - 4 - 8"
    display() {

        if (this.head == null) {
            return null;
        }

        var output = this.head.value;
        var runner = this.head.next;

        while (runner != null) {
            output += " - " + runner.value;
            runner = runner.next;
        }

        return output;
    }

    // contains(target)
    // return true if the linked list contains a node with the
    // given value and false otherwise
    contains(target) {
        var runner = this.head;

        while (runner != null) {
            if (runner.value == target) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    removeFront() {
        var temp = this.head;
        if(this.head == null){
            return null;
        }
        else if(this.head == this.tail){
            this.head = null;
            return temp.value;
        }
        else{
            this.head = this.head.next;
            temp.next = null;
            return temp.value;
            }
    }

    removeBack() {
        var runner = this.head.next;
        if(this.tail == null){
            return null;
        }

        if(this.tail == this.head){
            temp = this.head;
            this.tail = null;
            this.head = null;
            return temp.value;
        }

        while (runner.next != this.tail) {
            runner = runner.next;
        }
        
        var temp = this.tail;
        this.tail = runner;
        this.tail.next = null;
        return temp.value;
    }

    moveMinToFront() {
        var runner = this.head;
        var min = this.head;
        while (runner != null) {
            if (runner.value < min.value) {
                min = runner;
                // min_idex = index;
            }
            runner = runner.next;
        } 
        runner = this.head;
        var before_min = null;
        while (runner.next != min){
            runner = runner.next;
        }
        runner.next = runner.next.next;
        min.next = this.head;
        this.head = min;
    }

    moveMaxToBack() {
        var runner = this.head;
        var max = this.head;
        while (runner != null) {
            if (runner.value > max.value) {
                max = runner;
            }
            runner = runner.next;
        } 
        runner = this.head;
        var before_max = null;
        while (runner.next != max){
            runner = runner.next;
        }
        runner.next = runner.next.next;
        max.next = this.tail;
        this.tail = max;
    }


      // prependValue(value, target)
    // create a new ListNode with the given value and insert it into the
    // linked list before the node with the target value
    // if no node with that value exists, place it at the end
    // if the value is 9, the target is 4, and the list is 3 - 7 - 4 - 2 - 11
    // the list becomes 3 - 7 - 9 - 4 - 2 - 11
    // if the target was instead 1, the list would become 3 - 7 - 4 - 2 - 11 - 9
    // if you find multiple nodes with the given value, just put it before the first one
    // edge cases: is the list empty/only one node/if target is at head of list

    prependValue(value, target) {
        var runner = this.head;
        while (runner != null) {
            if (runner.value > max.value) {
                max = runner;
            }
            runner = runner.next;
        } 

    }
    // appendValue(value, target)
    // as above, but insert the new node after the node with the target value
    // new node still goes at the end if no node with the target value is found

    appendValue(value, target) {

    }
    //This is incomplete... need to add edge cases, troubleshoot MaxToBack, and add console.log of this.head.value & this.tail.value



}

var new_SLL = new SinglyLinkedList();

new_SLL.addToBack(7);
new_SLL.addToBack(3);
new_SLL.addToFront(2);
new_SLL.addToFront(21);
new_SLL.addToFront(3);
new_SLL.addToBack(7897);
console.log(new_SLL.display());
new_SLL.moveMinToFront();
new_SLL.moveMaxToBack();
console.log(new_SLL.display());
// new_SLL.removeFront();
// new_SLL.removeBack();
// console.log(new_SLL.display());


 // removeFront() - remove the head of the linked list and return its value
    // that means that this.head is going to change as well
    // is there a special case for if the linked list only has two nodes? one node?
    // zero nodes????????

    // removeBack() - remove the tail of the linked list and return its value
    // again, this means this.tail will change
    // as above - is there a special case for linked lists with a minimal number of
    // nodes inside them?


    //  moveMinToFront()
    // find the node with the smallest value in the list
    // then make it the head of the list by rearranging the nodes
    // do -not- just change the values of the nodes
    // (if two+ nodes are tied for minimum value, just move one)
    // if your linked list has nodes of values 3 - 7 - 21 - 2 - 11 - 9
    // after calling this method, it should be in this order:
    // 2 - 3 - 7 - 21 - 11 - 9
    // this is a two-step process: ID the node with the smallest value,
    // then rearrange them
    // are there any special cases? figure those out after you do the basics


    
    

    // moveMaxToBack()
    // as above, but find the node with the largest value and make it the tail
    // if your linked list has nodes of values 3 - 7 - 21 - 2 - 11 - 9
    // after calling this method, it should be in this order:
    // 3 - 7 - 2 - 11 - 9 - 21

    //Ryan's code:
    // findMin(){

    //     if (this.head == null) {
    //         return null;
    //     }

    //     var min = this.head
    //     var runner = this.head.next
    //     while(runner != null){
    //         if (runner.value < min.value){
    //             min = runner
    //             // console.log(min.value)
    //         }
    //         runner = runner.next
    //     }
    //     return min
    // }

    // moveNodeToFront(input) {

    //     if (this.head == input || this.head == null || input == null) {
    //         return null;
    //     }

    //     var runner = this.head;
    //     while (runner.next != input) {
    //         runner = runner.next;
    //     }
    //     runner.next = input.next;
    //     input.next = this.head;
    //     this.head = input;

    //     if (input = this.tail) {
    //         this.tail = runner;
    //     }

    //     // var runner = this.head;
    //     // while(runner.next != null) {
    //     //     runner = runner.next;
    //     // }
    //     // this.tail = runner;
    // }