//INCOMPLETE...

class PriQNode {
    constructor(val,pri) {
        this.val = val;
        this.pri = pri;
        this.next = null;
    }
}

class PriQ {
    constructor() {
        this.head = null;
    }

    addNode(val, pri) {
        var newNode = new PriQNode(val,pri);
        if (this.head == null) {
            this.head = newNode;
            return this;
        } 
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        console.log("Value added to front.");
        this.printList();
    }

    printList() {
        var output = "";
        var runner = this.head;
        while (runner != null) {
            output += " | " + runner.val + " | ->";
            runner = runner.next;
        }
        console.log(output);
        return output;
    }
}

let test = new SLL();
test.addToFront(3,3);
test.addToFront(5,5);
test.addToFront(8,8);
test.addToFront(9,9);
test.printList();