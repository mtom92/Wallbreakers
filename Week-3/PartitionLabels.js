var partitionLabels = function(S) {

    if(!S || S.length === 0){
        return S;
    }

    let map = new Map(), len = 0, arr = [];

    for(let i=0; i<S.length; i++){
        map.set(S[i], i);
    }
   console.log(map)


    while(len < S.length){

        let start = len, s="";
        let end = map.get(S[start]);
      console.log("element in end",S[start] ,"first end", end)

        while(start <= end){
            s += S[start];
            end = Math.max(map.get(S[end]),map.get(S[start]));
            len++;
            start++;
            console.log(s,"end",end,"len",len,"start",start)
        }

        arr.push(s.length);
    }
    return arr;
};
