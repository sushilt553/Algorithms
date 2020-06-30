function findKthLargest(nums, k) {
    let sorted = nums.sort((a, b) => a - b);

    return sorted[nums.length - k];
}

class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(i) {
        return Math.floor(i / 2);
    }

    getLeftChild(i) {
        return i * 2;
    }

    getRightChild(i) {
        return i * 2 + 1;
    }

    insert(val) {
        this.array.push(val);

        this.siftUp(this.array.length - 1);
    }

    siftUp(i) {
        if (i === 1) return;

        let parentIdx = this.getParent(i);

        if (this.array[parentIdx] < this.array[i]) {
            [this.array[parentIdx], this.array[i]] = [this.array[i], this.array[parentIdx]];
            this.siftUp(parentIdx);
        }
    }

    
}