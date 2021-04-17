class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

// and our SLL class
// we'll be using this... all week
// have you been saving what you do for algos locally if you're not
// the person writing it? maybe you should be?

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

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
        
        if(this.head == null) {
            return null;
        }

        var temp = this.head;

        if(this.head == this.tail) {
            this.head = null;
            this.tail = null;
            return temp.value;
        }

        else {
            this.head = this.head.next;
            temp.next = null;
            return temp.value;
        }
    }

    removeBack() {
        if (this.head == null) {
            return null;
        }

        else if (this.head == this.tail) {
            var temp = this.tail.value;
            this.head = null;
            this.tail = null;
            return temp;
        }

        else if (this.head.next == this.tail) {
            var temp = this.tail;
            this.tail = this.head;
            this.head.next = null;
            return temp.value;
        }

        else {
            var temp = this.tail;
            var runner = this.head.next;
            while(runner.next != this.tail) {
                runner = runner.next;
            }
            runner.next = null;
            this.tail = runner;
            return temp.value;
        }
    }

    // moveMinToFront()
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
    findMin(){

        if (this.head == null) {
            return null;
        }

        var min = this.head
        var runner = this.head.next
        while(runner != null){
            if (runner.value < min.value){
                min = runner
                // console.log(min.value)
            }
            runner = runner.next
        }
        return min
    }

    moveNodeToFront(input) {

        if (this.head == input || this.head == null || input == null) {
            return null;
        }

        var runner = this.head;
        while (runner.next != input) {
            runner = runner.next;
        }
        runner.next = input.next;
        input.next = this.head;
        this.head = input;

        if (input = this.tail) {
            this.tail = runner;
        }

        // var runner = this.head;
        // while(runner.next != null) {
        //     runner = runner.next;
        // }
        // this.tail = runner;
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
        if(this.head == null && this.tail == null) {
            this.addToFront(value);
            // creates new linked list with node containing value
            return null
        }

        else if (this.head == this.tail) {
            // add node to front
            if (this.head.value == target) {
                this.addToFront(value);    
            }
            else {
                this.addToBack(value);
            }
            return null;
        }

        else if (this.head.value == target) {
            this.addToFront(value);
            // var new_node = new ListNode(value);
            // new_node.next = this.head;
            // this.head = new_node;
        }

        // else if (this.head == this.tail) {
        //     // add node to front
        //     if (this.head.value == target) {
        //         this.addToFront(value);
        //     }
        //     else if (this.head.value != target) {
        //         this.addToBack(value);
        //     }
        //     else {
        //         return null;
        //         // catch-all in case of error
        //     }
        //     return null
        // }

        // original code - does not work if target is not present
        // else {
        //     //standard run
        //     var runner = this.head;
        //     while( runner.next.value != target && runner.next.value != null ) {
        //         runner = runner.next
        //     }
        //     var new_node = new ListNode(value);
        //     new_node.next = runner.next;
        //     runner.next = new_node;

        //     return null
        // }

        else {
            var runner = this.head;
            

            while (runner.next != null) {
                if (runner.next.value == target) {
                    var new_node = new ListNode(value);
                    new_node.next = runner.next;
                    runner.next = new_node;
                    return null;
                }
                runner = runner.next
            }

            this.addToBack(value);

            return null
        }
    }

    // secondToLastValue()
    // return the value of the second-to-last-node in the linked list
    // if the list has one or zero nodes in it, return undefined

    secondToLastValue() {
        
        if (this.head == this.tail || this.head == null){
            return undefined;
        }
        
        var runner = this.head;
        while (runner.next.next != null) {
            runner = runner.next;
        }
        return runner.value;
    }

    // partition(target)
    // rearrange the nodes in the list so that all nodes with values less than
    // the target value come first in the list, then all nodes with the target
    // value, then all nodes with values greater than the target value
    // if there are no nodes with values greater or less than the target value,
    // or no nodes with the target value at all, the function should still work
    // if the target is 5, and the list is 8 - 7 - 1 - 5 - 4 - 5 - 2 - 8 - 3
    // the list should rearrange so that the nodes (represented by values)
    // are in this order:
    // 1 - 4 - 2 - 3 - 5 - 5 - 8 - 7 - 8
    // if the target 5, and the list contains:
    // 8 - 1 - 7 - 2 - 4 - 9 - 0 - 1 - 3 - 8
    // the output should be:
    // 1 - 2 - 4 - 0 - 1 - 3 - 8 - 7 - 9 - 8
    // order of nodes does not matter as long as the above rules 
    // for placement are respected
    // remember to fix your head and tail afterwards
    // bonus: can you do it without using an array?
    // other bonus: can you do it without using an array -and- without using
    // another instance(s) of SinglyLinkedList?
    // super super W bonus extra plus turbo 3 and knuckles (featuring Dante
    // from the Devil May Cry series): can u do it blindfolded?!?!??!?!!!?!?!?!

    partition(target) {

        if (this.head == this.tail || this.head == null) {
            return null
        }

        var lowerHead = null;
        var lowerTail = null;
        var middleHead = null;
        var middleTail = null;
        var upperHead = null;
        var upperTail = null;

        var runner = this.head;

        while (runner != null) {
            var temp = runner;
            runner = runner.next;

            temp.next = null;

            if (temp.value < target) {
                if (lowerHead == null) {
                    lowerHead = temp;
                    lowerTail = temp;
                }

                else {
                    lowerTail.next = temp;
                    lowerTail = temp;
                }
            }

            else if (temp.value == target) {
                if (middleHead == null) {
                    middleHead = temp;
                    middleTail = temp;
                }

                else {
                    middleTail.next = temp;
                    middleTail = temp;
                }
            }

            else if (temp.value > target) {
                if (upperHead == null) {
                    upperHead = temp;
                    upperTail = temp;
                }

                else {
                    upperTail.next = temp;
                    upperTail = temp;
                }
            }
        }
        // if only nodes greater than the target are found
        if (lowerHead == null && middleHead == null) {
            this.head = upperHead;
            this.tail = upperTail;
            return null;
        }
        // if only nodes less than the target are found
        if (middleHead == null && upperHead == null) {
            this.head = lowerHead;
            this.tail = lowerTail;
            return null;
        }

        //if only nodes with target value are found
        if (lowerHead == null && upperHead == null) {
            this.head = middleHead;
            this.tail = middleTail;
            return null;
        }

        // if no nodes less than target are found
        if (lowerHead == null) {
            this.head = middleHead;
            this.tail = upperTail;
            middleTail.next = upperHead;
            return null
        }

        // if no nodes with target are found
        if (middleHead == null) {
            this.head = lowerHead;
            this.tail = upperTail;
            lowerTail.next = upperHead;
            return null;
        }

        // if no nodes great than target are found
        if (upperHead == null) {
            this.head = lowerHead;
            this.tail = middleTail;
            lowerTail.next = middleHead;
            return null;
        }

        //final case - all three linked lists have some kind of data
        this.head = lowerHead;
        this.tail = upperTail;
        lowerTail.next = middleHead;
        middleTail.next = upperHead;
        return null;
    }
}

var x = new SinglyLinkedList();
x.addToBack(1);
x.addToBack(3);
x.addToBack(1);
x.addToBack(4);
x.addToBack(1);
x.addToBack(3);
x.addToBack(2);
console.log(x.display());
x.partition(-100);
console.log(x.display());

var b = new ListNode(7);
b.seen = true;
console.log(b);





