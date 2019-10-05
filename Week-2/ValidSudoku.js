var isValidSudoku = function(board) {
    var numbers = {}
    for(var i=0;i<9;i++){
        for(var j=0;j<9;j++){
            if(board[i][j] != "."){
                numbers[i+""+j]= board[i][j]
            }
        }
    }

    for(var number in numbers ){
        if(!checkCol(number,numbers[number]) || !checkRow(number,numbers[number]) || !checkSub(number,numbers[number])){
           return false
           }
    }
    return true

    function checkCol(coordinate,value){
        var x = Number(coordinate.split("")[0],10)
        var y = Number(coordinate.split("")[1],10)
        var equals = 0

        for(var i=y+1; i<9;i++){
            if(value == board[x][i]){
               equals++
               }
        }

        for(var i=y-1; i>=0;i--){
            if(value == board[x][i]){
               equals++
               }
        }

        return (equals == 0) ? true : false
    }

    function checkRow(coordinate,value){
        var x = Number(coordinate.split("")[0],10)
        var y = Number(coordinate.split("")[1],10)
        var equals = 0

        for(var i=x+1; i<9;i++){
            if(value == board[i][y]){
               equals++
               }
        }

        for(var i=x-1; i>=0;i--){
            if(value == board[i][y]){
               equals++
               }
        }

        return (equals == 0) ? true : false
    }

    function checkSub(coordinate,value){
        var x = Number(coordinate.split("")[0],10)
        var y = Number(coordinate.split("")[1],10)
        var equals = 0

        x= x-(x%3)
        y= y-(y%3)


        for(var i=x;i<x+3;i++){
            for(var j =y; j<y+3;j++){

                if(board[i][j] == value){
                    equals++
                }
            }
        }

        return (equals == 1) ? true : false
    }

};
