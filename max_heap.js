class MaxHeap {
    constructor() {
        this.root = [null]
    }

    getParent(idx){
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

    insert(val, root=this.root) {
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
        }else{
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

let heap = new MaxHeap();

heap.insert(12);
heap.insert(9);
heap.insert(13);
heap.insert(14);
heap.insert(6);
heap.insert(3);
heap.insert(16);

console.log(heap.root);
heap.deleteMax();
console.log(heap.root);