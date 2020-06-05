var destCity = function(paths) {
    let hash = {};

    for (let i = 0; i < paths.length; i++) {
        hash[paths[i][0]] = true;
    };

    for (let i = 0; i < paths.length; i++) {
        if (!hash[paths[i][1]]) return paths[i][1];
    }
}
