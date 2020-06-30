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
}