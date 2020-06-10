var kWeakestRows = function(mat, k) {
    let hash = {};

    for (let i = 0; i < mat.length; i++) {
        let current = mat[i];
        for (let j = 0; j < current.length; j++) {
            let ele = current[j];
            if (hash[i]) {
                if (ele === 1) {
                    hash[i].soldiers++;
                }else{
                    hash[i].civilians++;
                }
            }else{
                hash[i] = {soldiers: 0, civilians: 0};
                if (ele === 1) {
                    hash[i].soldiers = 1;
                }else{
                    hash[i].civilians = 1;
                }
            }
        }
    }

    let soldiers = Object.keys(hash).map((ele) => hash[ele].soldiers).sort((a, b) => a - b);
    let arr = [];

    for (let i = 0; i < soldiers.length; i++) {
        let ele = soldiers[i];
        for (let key in hash) {
            if (hash[key].soldiers === ele) arr.push(key);
            if (arr.length === k) return arr;
        }
    }
    return arr;
}

let mat = [[1, 1, 0, 0, 0],
[1, 1, 1, 1, 0],
[1, 0, 0, 0, 0],
[1, 1, 0, 0, 0],
[1, 1, 1, 1, 1]]

let mat2 = [[1, 0, 0, 0],
[1, 1, 1, 1],
[1, 0, 0, 0],
    [1, 0, 0, 0]]

console.log(kWeakestRows(mat, 3))
console.log(kWeakestRows(mat2, 2))