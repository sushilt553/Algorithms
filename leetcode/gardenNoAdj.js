var gardenNoAdj = function(N, paths) {
    let flowers = [1,2,3,4];

    let gardens = new Array(N).fill().map(() => (
        {
            flower: "",
            connectedGardens: []
        }
    ))

    for (let [a, b] of paths) {
        gardens[a - 1].connectedGardens.push(gardens[b - 1]);
        gardens[b - 1].connectedGardens.push(gardens[a - 1]);
    }

    for (let garden of gardens) {
        for (let flower of flowers) {
            if (!garden.connectedGardens.map((g) => g.flower).includes(flower)) {
                garden.flower = flower;
                break;
            }
        }
    }

    return gardens.map((garden) => garden.flower)
}

let N = 3;
let paths = [[1, 2], [2, 3], [3, 1]];

console.log(gardenNoAdj(N, paths))