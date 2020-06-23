var duplicateZeros = function(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            arr.pop();
            i++;
        }
    }
    return arr;
}

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currEle = arr[i];

        for (var j = i - 1; j >= 0 && arr[j] > currEle; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currEle
    }

    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIdx = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        swap(arr, minIdx, i);
    }
    return arr;
}

function swap(arr, i1, i2) {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    return arr;
}

console.log(insertionSort([5,4,3,5,4]))
console.log(insertionSort([1,0,2,3,0,4,5,0]))
console.log(selectionSort([1,0,2,3,0,4,5,0]))