var findComplement = function(num) {
  var mask = Math.pow(2, num.toString(2).length) - 1;
   return ~num & mask;
};
