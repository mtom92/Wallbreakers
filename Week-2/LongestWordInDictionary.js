var longestWord = function(words) {
    var myTrie = new Trie

    for(var i=0;i<words.length;i++){
        myTrie.insert(words[i])
    }

    return myTrie.long()

};

 class Node{
     constructor(){
         this.isEnd = false;
         this.freq = 0;
         this.children = {};
     }
 }

 class Trie{
     constructor(){
         this.root = new Node()
     }

     insert(word){
         if( word.length === 0 ) return

        var letter;
        var currentNode = this.root

        for( var i = 0; i < word.length; i++ ){
            letter = word[i]
            if( !currentNode.children.hasOwnProperty(letter) ){
                currentNode.children[letter] = new Node()
            }
            currentNode = currentNode.children[letter]
        }
        currentNode.isEnd = true
        currentNode.freq = currentNode.freq + 1
     }

     long(){
         var ans=[]

         Object.keys(this.root.children).forEach(child => dfs(this.root.children[child],"",child))

        function dfs(current,accum="",val){
            if(current.isEnd)
            {
                    accum += val
                     if(Object.keys(current.children).length == 0 ){
                        ans.push(accum)
                        return
                        }
                      Object.keys(current.children).forEach(child =>{
                          if(current.children[child].isEnd){
                             dfs(current.children[child],accum,child)
                             }
                            else{
                             ans.push(accum)
                                        }
                      })
           }
        }


         if(ans.length <2){
            return ans.pop()
            }

         var max=0

         ans.forEach(word => {
             max = Math.max(max,word.length)
         })


        ans = ans.filter(word => word.length == max).sort()

         return ans.shift()


     }
 }
