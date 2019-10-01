var isIsomorphic = function(s, t) {
    var sMap = map(s.split(""))
    var tMap = map(t.split(""))
    var sUnique = unique(s.split(""))
    var tUnique = unique(t.split(""))



    if(sUnique.length === tUnique.length){
         for(var i=0;i<sUnique.length;i++){
             if(sMap[sUnique[i]].length != tMap[tUnique[i]].length){
                  return false
                }
             for(var j=0; j< sMap[sUnique[i]].length;j++){
                 if(sMap[sUnique[i]][j] != tMap[tUnique[i]][j]){
                    return false
                    }
             }
         }
        return true
       }
    return false

};

  function map(arr){
     var result = {}
      for(var i=0; i<arr.length;i++){
          if(!result[arr[i]]){
              result[arr[i]]=[i];
             }
          else{
              result[arr[i]].push(i)
          }
      }
      return result
  }

  function unique(arr){
     var result = []
     for(var j=0;j<arr.length;j++){
         if(!result.includes(arr[j])){
            result.push(arr[j])
            }
     }
      return result
  }
