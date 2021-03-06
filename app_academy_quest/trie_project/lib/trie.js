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

   insertRecur(word, root = this.root) {

       let letter = word[0];

       if (!root.children[letter]) {
           root.children[letter] = new Node();
       }

       if (word.length === 1) {
           root.children[letter].isTerminal = true;
       }else{
            this.insertRecur(word.slice(1), root.children[letter]);
       }
   }

   insertIter(word) {
       let root = this.root;

       for (let i = 0; i < word.length; i++) {
           if (!root.children[word[i]] && i === word.length - 1) {
               root.children[word[i]] = new Node();
               root.children[word[i]].isTerminal = true;
           }else if (!root.children[word[i]]){
               root.children[word[i]] = new Node();
           }
            root = root.children[word[i]]
       }
   }

   searchRecur(word, root=this.root) {
    if (word.length === 0) {
        if (root.isTerminal) {
            return true;
        }else{
            return false;
        }
    } 
    let letter = word[0];
    if (!root.children[letter]){
        return false;
    }else{
        return this.searchRecur(word.slice(1), root.children[letter])
    }
   }

   searchIter(word) {
       let root = this.root;
       
       for (let i = 0 ; i < word.length; i++) {
            let letter = word[i];
            
            if (root.children[letter] && i === word.length - 1) {
                if (root.children[letter].isTerminal) {
                    return true;
                }else{
                    return false;
                }
            }

            if (!root.children[letter]){
                return false;
            }

            root = root.children[letter];
       }
       return false;
   }
}

module.exports = {
    Node,
    Trie
};