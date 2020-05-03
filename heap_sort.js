
class MaxHeap {
    constructor() {
        this.root = [null]
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return 2 * idx;
    }

    getRightChild(idx) {
        return 2 * idx + 1;
    }

    siftUp(idx) {
        if (idx === 1) return;

        let parentIdx = this.getParent(idx);

        if (this.root[idx] > this.root[parentIdx]) {
            [this.root[idx], this.root[parentIdx]] = [this.root[parentIdx], this.root[idx]];
            this.siftUp(parentIdx);
        }
    }

    insert(val, root = this.root) {
        root.push(val);
        this.siftUp(root.length - 1);
    }

    siftDown(idx) {
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);
        let leftValue = this.root[leftIdx];
        let rightValue = this.root[rightIdx];

        if (leftValue === undefined) return -Infinity;
        if (rightValue === undefined) return -Infinity;

        if (this.root[idx] > leftValue && this.root[idx] > rightValue) return;

        let swapIdx;
        if (leftValue > rightValue) {
            swapIdx = leftIdx;
        } else {
            swapIdx = rightIdx;
        }

        [this.root[idx], this.root[swapIdx]] = [this.root[swapIdx], this.root[idx]];
        this.siftDown(swapIdx);
    }

    deleteMax() {
        if (this.root.length === 2) return this.root.pop();

        if (this.root.length === 1) return null;

        let maxValue = this.root[1];
        this.root[1] = this.root.pop();

        this.siftDown(1);

        return maxValue;
    }
}

function heapSort(arr) {
    let heap = new MaxHeap();
    let sortedArr = [];
    arr.forEach((ele) => heap.insert(ele));

    while (heap.root.length > 1) {
        sortedArr.unshift(heap.deleteMax());    
    }
    return sortedArr;
}

//InPlace Heap Sort

function heapSort(arr) {

    for (let i = arr.length - 1; i >= 0; i--) {
        heapify(arr, arr.length, i);
    }

    for (let endOfHeap = arr.length - 1; endOfHeap >= 0; endOfHeap--) {
        swap(arr, endOfHeap, 0);
        heapify(arr, endOfHeap, 0);
    }
    return arr;
}   

function heapify(arr, n, idx) {
    let leftIdx = 2 * idx + 1;
    let rightIdx = 2 * idx + 2;
    let leftValue = arr[leftIdx];
    let rightValue = arr[rightIdx];

    if (leftIdx >= n) leftValue = -Infinity;
    if (rightIdx >= n) rightValue = -Infinity;

    if (arr[idx] > leftValue && arr[idx] > rightValue) return;

    let swapIdx;
    if (leftValue > rightValue) {
        swapIdx = leftIdx;
    }else{
        swapIdx = rightIdx;
    }
    swap(arr, idx, swapIdx);
    heapify(arr, n, swapIdx);    
}

function swap(arr, i1, i2) {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

console.log(heapSort([12,11,1,13,14,2]));

