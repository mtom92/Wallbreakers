var calPoints = function(ops) {
    var result = 0,curr =0, stack=[];

    for(var i=0;i<ops.length;i++){
       curr = ops[i]
        switch(curr){
            case "+":
                curr = Number(stack[stack.length-1],10) + Number(stack[stack.length-2],10)
                result += curr
                stack.push(curr)
                break;
            case "D":
                curr = (Number(stack[stack.length-1],10)*2)
                result += curr
                stack.push(curr)
                break;
            case "C":
                result -= Number(stack[stack.length-1],10)
                stack.pop()
                break;
            default :
                result += Number(curr,10)
                stack.push(curr)
                break;
               }
     }

    return result
};
