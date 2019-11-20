var maxProfit = function(prices,max=0) {
    if(prices.length == 0){
       return max > 0 ? max : 0
       }
    var help = prices.shift()

    for(var i=0;i<prices.length;i++){
        max = Math.max(max,-(help-prices[i]))
    }

    return maxProfit(prices,max)
};
