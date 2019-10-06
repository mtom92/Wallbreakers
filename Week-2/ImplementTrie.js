class Node{
    constructor(){
        this.end=false
        this.children = {}
    }
}

var Trie = function() {
   this.root = new Node()
};

Trie.prototype.insert = function(word) {
    var current= this.root , letter;

    for(var i=0;i<word.length;i++){
       letter = word[i]
       if(!current.children[letter]){
          current.children[letter]= new Node()
          }
        current = current.children[letter]
    }
    current.isEnd = true
};


Trie.prototype.search = function(word) {
    var current = this.root, letter;

    for(var i=0;i<word.length;i++){
        letter = word[i]
        if(!current.children[letter]){
              return false
           }
        current = current.children[letter]
    }
    if(current.isEnd){
       return true
       }
    return false
};


Trie.prototype.startsWith = function(prefix) {
    var current = this.root, letter;

    for(var i=0;i<prefix.length;i++){
        letter = prefix[i]
        if(!current.children[letter]){
              return false
           }
        current = current.children[letter]
    }
       return true
};
