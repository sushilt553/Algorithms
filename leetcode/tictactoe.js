var tictactoe = function(moves) {
    let winningMoves = [
        [[0,0], [0,1], [0,2]],
        [[1,0], [1,1], [1,2]],
        [[2,0], [2,1], [2,2]],
        [[0,0], [1,0], [2,0]],
        [[0,1], [1,1], [2,1]],
        [[0,2], [1,2], [2,2]],
        [[0,0], [1,1], [2,2]],
        [[0,2], [1,1], [2,0]]
    ].sort();

    let X = [];
    let Y = [];

    for (let i = 0; i < moves.length; i++) {
        if (i % 2 === 0) {
            X.push(moves[i]);
        }else{
            Y.push(moves[i]);
        }
    }
    X = X.sort();
    Y = Y.sort();
    
    let result = "Pending";
    let counter = false

    for(let i = 0; i < winningMoves.length; i++) {
        let a = String(winningMoves[i][0]);
        let b = String(winningMoves[i][1]);
        let c = String(winningMoves[i][2]);
        let count = 0;
        for (let j = 0; j < X.length; j++) {
            let ele = String(X[j])
            if (ele === a || ele === b || ele === c) {
                count++;
            }
            
            if (count === 3) {
                result = "A";
                counter = true;
            }
        }

        if (counter) break;
        let count1 = 0;
        for (let k = 0; k < Y.length; k++) {
            let ele = String(Y[k])
            if (ele === a || ele === b || ele === c) {
                count1++;
            }
            if (count1 === 3) {
                result = "B";
                counter = true;
            }
        }
        
        if (counter) break;

        if (i === winningMoves.length - 1) {
            if ((X.length === 4 && Y.length === 5) || (X.length === 5 && Y.length === 4)) result = "Draw";
        }
    };
    return result;
}

console.log(tictactoe([[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]]));