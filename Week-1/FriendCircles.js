var findCircleNum = function(M) {

    if(M.length == 0 || M == null) return 0
    var p = []
    var N = M.length
   function union(x,y){
       p[findParent(x)] = findParent(y);
   }

   function findParent(node) {

        if (p[node] == node)
            return node;

        while (p[node] != node) {
            node = p[node];

        }

        return p[node];
    }



    for(var i=0;i<N;i++){
        p[i]=i
    }


    for(var i=0;i<N;i++){
        for(var j=0;j<N;j++){
            if(M[i][j]==1){
                union(i,j)

            }
        }
    }

    var s = new Set()
    for(var k=0; k<N;k++){
        //console.log(findParent(p[k]))
        s.add(findParent(p[k]))
    }
    //console.log(s)
    return s.size
}
