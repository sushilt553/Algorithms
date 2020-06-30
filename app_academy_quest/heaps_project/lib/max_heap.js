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

    }

    insert(val) {

    }

    siftDown(i) {

    }

    deleteMax() {
        
    }
}

module.exports = {
    MaxHeap
};