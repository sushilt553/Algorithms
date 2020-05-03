class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insert(word, root = this.root) {
        let first = word[0];

        if (!(first in root.children)) {
            root.children[first] = new Node();
        }
        
        if (word.length === 1) {
            root.children[first].isTerminal = true;
        }else{
            this.insert(word.slice(1),root.children[first]);
        }
    }

    search(word, root = this.root) {

        if (word.length === 0) {
            if (root.isTerminal) {
                return true;
            }else{
                return false;
            }
        }

        let letter = word[0];

        if (letter in root.children) {
            return this.search(word.slice(1), root.children[letter]);
        }else{
            return false;
        }
    }
}