var gcdOfStrings = function(str1, str2) {

}

var createHash = function(str) {
    let hash = {};

    for (let i = 0; i < str.length; i++) {
        if (!hash[str[i]]) hash[str[i]] = 0;

        hash[str[i]]++;
    }

    return hash;
}