class Heap{
    constructor(){
        this.arr=[null]
    }

    add(int){
        this.arr.push(int)
        var childIndex = this.arr.length -1;
        var parentIndex = Math.floor((childIndex)/2)
        
        //while the parent is greater than child
        if(this.arr[childIndex] < this.arr[parentIndex]){
            while (this.arr[childIndex] < this.arr[parentIndex]){
                //if parent is greater than child, swap
                [this.arr[childIndex], this.arr[parentIndex]] = [this.arr[parentIndex], this.arr[childIndex]]
                childIndex = parentIndex;
                parentIndex = Math.floor((childIndex)/2)
            }
        }
    }
//INCOMPLETE
    remove(){
        [this.arr[1], this.arr[this.arr.length-1]] = [this.arr[this.arr.length-1], this.arr[1]]
        this.arr.pop()

        var childIndex = this.arr.length -1;
        var parentIndex = Math.floor((childIndex)/2)

        if(this.arr[parentIndex] < this.arr[parentIndex]){
            while (this.arr[childIndex] < this.arr[parentIndex]){
                //if parent is greater than child, swap
                [this.arr[childIndex], this.arr[parentIndex]] = [this.arr[parentIndex], this.arr[childIndex]]
                childIndex = parentIndex;
                parentIndex = Math.floor((childIndex)/2)
            }
        }
    }
}

var newHeap = new Heap;
newHeap.add(5)
newHeap.add(10)
newHeap.add(7)
newHeap.add(9)
newHeap.add(3)
newHeap.add(4)
console.log(newHeap)

