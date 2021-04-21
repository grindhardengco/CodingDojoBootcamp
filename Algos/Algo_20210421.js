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
    }
    // enqueue(value) - adds the given value to the queue (at the head)
    enqueue(value) {
        var new_node = new ListNode(value);
		// determine if stack is empty or not
		// add new node at appropriate position
		if (this.head == null) {
			this.head = new_node;
			this.tail = new_node;
		}
		
		else {
			new_node.next = this.head;
			this.head = new_node;
		}
    }

    // dequeue() - removes the front (tail) value from queue and returns it
    dequeue() {
        if (this.head == null) {
			return null;
		}

		if (this.head == this.tail) {
			var temp = this.tail;
			this.head = null;
			this.tail = null;
			return temp.value
		}

		var temp = this.tail;
        var runner = this.head;
        while(runner.next != this.tail){
            runner = runner.next;
        }

		runner.next = null;
        this.tail = runner;
		return temp.value
    }

    // front() - returns the front (tail) value without removing it
    front() {
        if(this.head == null){
            return null;
        }
		return this.tail.value
    }

    // contains(target) - returns true if the target value is in the queue,
    // false if not
    contains(target) {
		if(this.head == null){
            return false;
        }

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
		if (this.head == null) {
			return true;
		}
		return false;
    }

    // size() - returns the size of the queue
    size() {
		var runner = this.head;
		var counter = 0;

		while (runner != null) {
			counter += 1;
			runner = runner.next;
		}
		return counter;
	}

    // compare(other_queue) - return true if this queue and the other_queue
    // have the same values in the same order and false otherwise
    // do not modify either queue in this instance
    // remember:
    // var x = new ListNode(7);
    // var y = new ListNode(7);
    // x == y? false
    // x.value == y.value? true
    compare(other_queue) {
        // checks for equal size
        if(this.size() != other_queue.size()) {
            return false;
        }

        var runner_this = this.head;
        var runner_other = other_queue.head;

        // set number of iterations to compare, based on queue length
        for(let i = 0; i < this.size(); i++) {
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
}

var x = new SLLQueue();
console.log(x.isEmpty()) // return True
// test it yourself here tbh
// sorry not sorry

var a = new SLLQueue();
a.enqueue(7);
a.enqueue(3);
a.enqueue(11);

console.log(a.isEmpty()); //return False

var b = new SLLQueue();
b.enqueue(7);
b.enqueue(3);
b.enqueue(11);

console.log(a.compare(b)) // return true

var c = new SLLQueue();
c.enqueue(7);
c.enqueue(3);
c.enqueue(12);

console.log(a.compare(c)) // return false

var d = new SLLQueue();
d.enqueue(7);
d.enqueue(3);
d.enqueue(11);
d.enqueue(4);

console.log(a.compare(d)) // return false

console.log(d.front()); // return 7

console.log(d.contains(11)); // return true
console.log(d.contains(115)); // returns false

console.log(d.size()); //returns 4

console.log(d.dequeue()); // returns 7

console.log(d.size()); //returns 3
