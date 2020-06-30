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

    siftUp(i) {
        if (i === 1) return;

        let parentIdx = this.getParent(i);

        if (this.array[parentIdx] < this.array[i]) {
            [this.array[parentIdx], this.array[i]] = [this.array[i], this.array[parentIdx]];

            this.siftUp(parentIdx);
        }
    }

    insert(val) {
        this.array.push(val);

        this.siftUp(this.array.length - 1);
    }

    siftDown(i) {

    }

    deleteMax() {
        if (this.array.length === 2) return this.array.pop();
        if (this.array.length === 1) return null;

        let max = this.array[1];
        this.array[1] = this.array.pop();

        this.siftDown(1);
        return max;
    }
}

module.exports = {
    MaxHeap
};