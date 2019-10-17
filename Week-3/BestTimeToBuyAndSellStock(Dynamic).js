var maxProfit = function(prices) {

    if(prices.length <= 1) return 0;

    var maxAfterIndexI = []

    var max = prices[prices.length-1];

    for(var i = prices.length - 2; i >= 0; i--)
    {
        if(prices[i] > max)
            max = prices[i];
        maxAfterIndexI[i] = max;

    }

    var maxProfit = 0;

    for(var i = 0; i < prices.length; i++)
    {
        if(maxAfterIndexI[i] - prices[i] > maxProfit)
            maxProfit = maxAfterIndexI[i] - prices[i];

    }

    return maxProfit;
};
  
