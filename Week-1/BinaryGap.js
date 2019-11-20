var binaryGap = function(N) {
    var nHelp = N.toString(2).split("")
    var last = 0;
    var max = 0;

    console.log(nHelp)
     for(var i=0; i<nHelp.length;i++){
         if(nHelp[i] == 1){
               if(last>-1){
                   max = Math.max(max,i-last)
                   console.log(max)
               }
              last = i
            }
     }

    return max
};
