class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

// a queue! first in, first out
// we add to the head of a queue but remove from the tail

class SLLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    // enqueue(value) - adds the given value to the queue (at the head)
    enqueue(value) {
        var new_node = new ListNode(value);
        if(this.head == null){
            this.head = new_node;
            this.tail = new_node;
        }
        else {
            new_node.next = this.head;
            this.head = new_node;
            this.size += 1;
        }
    }

    // dequeue() - removes the front (tail) value from queue and returns it
    dequeue() {
        if(this.head == null){
            return null;
        }
        else if(this.head == this.tail){
            var temp = this.head;
            this.head = null;
            this.tail = null;
            this.size = 0;
            return temp.value;
        }
        else{
            temp = this.tail;
            var runner = this.head;
            while (runner.next.next != null) {
                runner = runner.next;
            }
            runner.next = null;
            this.tail = runner;
        this.size -= 1;
        return temp.value;
        }
    }

    // front() - returns the front (tail) value without removing it
    front() {
        if(this.head == null){
            return null;
        }
        return this.tail.value;
    }

    // contains(target) - returns true if the target value is in the queue,
    // false if not
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

    // isEmpty() - returns true if the queue is empty, false otherwise
    isEmpty() {
        if(this.head == null){
            return true;
        }
        return false;
    }


    // compare(other_queue) - return true if this queue and the other_queue
    // have the same values in the same order and false otherwise
    // do not modify either queue in this instance
    compare(other_queue) {
        // checks for equal size
        if(this.size != other_queue.size) {
            return false;
        }

        var runner_this = this.head;
        var runner_other = other_queue.head;

        // set number of iterations to compare, based on queue length
        for(let i = 0; i < this.size; i++) {
            // if non-matching value is found, return false
            if(runner_this.value != runner_other.value) {
                return false;
            }
            runner_this = runner_this.next;
            runner_other = runner_other.next;
        }

        // if entire queue is iterated through and no non-matching values are found, return true
        return true;
    }

    // isPalindrome() - return true if the values of the queue form a palindrome,
    // and false otherwise. don't put the values of the queue into an array!
    // (or turn them into a string, either - your queue listnode values
    // may not always be able to be turned into a string)
    // do not modify the queue state in any way
    // also don't add some kind of tricky extra queue methods - they're not needs
    // maybe... use a stack? you'll need to copy that class into here
    // you ain't gotta tho nbd it's just a suggestion
    isPalindrome() {
        var temp_queue = new SLLStack();

        var runner = this.head;
        while (runner != null) {
            console.log(runner.value);
            temp_queue.push(runner.value);
            runner = runner.next;
        }

        runner = this.head;
        while (runner != null) {
            var x = temp_queue.pop();
            console.log(`Original: ${runner.value} temp: ${x}`);
            if (runner.value != x) {
                return false;
            }
            runner = runner.next;
        }

        return true;
    }
}


var x = new SLLQueue();

x.enqueue(1);
x.enqueue(2);
x.enqueue(3);
x.enqueue(2);
x.enqueue(1);
console.log(x.isPalindrome()); // returns true

var y = new SLLQueue();

y.enqueue(1);
y.enqueue(2);
y.enqueue(3);
y.enqueue(3);
y.enqueue(2);
y.enqueue(1);
console.log(y.isPalindrome()); // returns true

var z = new SLLQueue();

z.enqueue(1);
z.enqueue(2);
z.enqueue(3);
z.enqueue(4);
z.enqueue(2);
z.enqueue(1);
console.log(z.isPalindrome()); // returns false

var w = new SLLQueue();
w.enqueue(true);
w.enqueue('hello!');
w.enqueue(7);
w.enqueue(7);
w.enqueue('hello!');
w.enqueue(true);
console.log(w.isPalindrome()); // returns true