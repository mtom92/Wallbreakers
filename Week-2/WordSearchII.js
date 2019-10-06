var findWords = function(board, words) {

class Node{
    constructor(){
        this.isEnd = false;
        this.children = {};
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    add(word){
       var current=this.root;
       var letter

       for(var i=0;i<word.length;i++){
           letter = word[i]
           if(!current.children[letter]){
               current.children[letter] = new Node()
              }
           current = current.children[letter]
       }
      current.isEnd = true
    }

    prefix(word){
        var current = this.root, letter;

        for(var i=0;i<word.length;i++){
            letter = word[i]
            if(!current.children[letter]){
                return false
            }
            current = current.children[letter]
        }
        return true
    }

    complete(word){
        var current = this.root, letter;

        for(var i=0;i<word.length;i++){
            letter = word[i]
            if(!current.children[letter]){
                return false
            }
            current = current.children[letter]
        }
        if(current.isEnd){
            return [true,current]
        }
        return false
    }
}


    var myTrie = new Trie();

    for(var word of words){
        myTrie.add(word)
    }

    var found= new Set()
    //const visited = [...new Array(board.length)].map(() => new Array(board[0].length).fill(false));
    var visited = []

    for(var i=0;i<board.length;i++){
        visited[i]=[]
        for(var j=0;j<board[0].length;j++){
            visited[i][j]=false
        }
    }


    for(var i=0;i<board.length;i++){
        for(var j=0;j<board[0].length;j++){
          if(myTrie.prefix(board[i][j])){
             dfs(i,j,"",visited)
             }
        }
    }

    function dfs(y,x,acum="",visited){

     if(y<0 || x<0 || y>board.length-1 || x>board[0].length-1 || visited[y][x] == true || !myTrie.prefix(acum) ){
         return
     }

      acum += board[y][x]

      visited[y][x]=true

       if(myTrie.complete(acum)){
              found.add(acum)
           if(!myTrie.complete(acum)[1].children){
              return
              }
         }


        dfs(y+1,x,acum,visited)
        dfs(y-1,x,acum,visited)
        dfs(y,x+1,acum,visited)
        dfs(y,x-1,acum,visited)
        visited[y][x] = false

    }

    return [...found]
};
