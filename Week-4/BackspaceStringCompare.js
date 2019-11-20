var backspaceCompare = function(S, T) {

        function normal(arr){
            var res = [],curr;

            while(arr.length > 0){
                curr = arr.shift()

                if(curr === '#'){
                   res.pop()
                   }
                else{
                   res.push(curr)
                }
            }
            return res
        }

    var newS= normal(S.split(''))
    var newT= normal(T.split(''))


    return newS.join("") == newT.join("") ? true : false
};
