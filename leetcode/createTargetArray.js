const createTargetArray = (nums, index) => {
    let targetArray = [];

    for (let i = 0; i < nums.length; i++) {
        let idx = index[i];
        let ele = nums[i];
        let currenEle = targetArray[idx];
        if (currenEle) {
            targetArray.push(ele);
            insert(targetArray, idx);
        }else{
            targetArray[idx] = ele;
        }
    }
    return targetArray;
}

const insert = function(arr, idx) {
    let currentEle = arr[arr.length - 1];
    let i = arr.length - 1;
    let j = i - 1;
    while (j !== idx) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = arr[j];
    arr[j] = currentEle;
}

console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1]));