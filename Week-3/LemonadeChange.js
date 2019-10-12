var lemonadeChange = function(bills) {
    var map = {
        'fives': 0,
        'tens': 0
    }
    for(let i = 0; i < bills.length; i++){
        switch(bills[i]){
            case 5:
                map.fives++;
                break;
            case 10:
                map.fives--;
                map.tens++;
                break;
            case 20:
                if(map.tens > 0) {
                    map.tens--;
                    map.fives--;
                } else {
                    map.fives -= 3;
                }
         }
       if(map.fives < 0) return false;
    }
    return true
};
