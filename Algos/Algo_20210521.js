class Heap{
    constructor(){
        this.arr=[null]
    }

    add(int){
        this.arr.push(int)
        var childIndex = this.arr.length -1;
        var parentIndex = Math.floor((childIndex)/2)
        
        //while the parent is greater than child

        while (this.arr[childIndex] < this.arr[parentIndex]){
            //if parent is greater than child, swap
            [this.arr[childIndex], this.arr[parentIndex]] = [this.arr[parentIndex], this.arr[childIndex]]
            childIndex = parentIndex;
            parentIndex = Math.floor((childIndex)/2)
        }

    }
//INCOMPLETE
    remove(){
        [this.arr[1], this.arr[this.arr.length-1]] = [this.arr[this.arr.length-1], this.arr[1]]
        var result = this.arr.pop()

        var parentIndex = 1
        var childIndex = parentIndex*2
        //            or parentIndex*2+1
        
        while (this.arr[parentIndex] > this.arr[childIndex] || this.arr[parentIndex] > this.arr[childIndex+1]){

            if(this.arr[childIndex]<=this.arr[childIndex+1]){
                //then use the childIndex (not +1)
                [this.arr[parentIndex], this.arr[childIndex]] = [this.arr[childIndex], this.arr[parentIndex]]
                parentIndex = childIndex
            }
            else{
                //then use the childIndex + 1
                [this.arr[parentIndex], this.arr[childIndex+1]] = [this.arr[childIndex+1], this.arr[parentIndex]]
                parentIndex = childIndex+1
            } 
            childIndex = parentIndex*2
        }
        console.log(result)
        return result;
    }
}

// var newHeap = new Heap;
// newHeap.add(5)
// newHeap.add(10)
// newHeap.add(7)
// newHeap.add(9)
// newHeap.add(3)
// newHeap.add(4)
// console.log(newHeap)
// newHeap.remove();
// console.log(newHeap)

var inputArr = [5,10,7,9,3,4]

function heapify(inputArr){
    var heap = new Heap;
    for(i=0; i<inputArr.length; i++){
        heap.add(inputArr[i])
    }
    console.log(heap)
    return heap
}

heapify(inputArr)

//THIS HEAPSORT() IS INCOMPLETE...!!!
function heapSort(inputArr){
    var heap = new Heap;
    for(i=0; i<inputArr.length; i++){
        heap.add(inputArr[i])
    }
    var outputArr = []
    for(i=0; i<inputArr.length; i++){
        outputArr.push(heap.remove())
    }
    console.log(outputArr)
    return outputArr
}

heapSort(inputArr)