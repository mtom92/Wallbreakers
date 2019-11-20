var rotate = function(nums, k) {
  // declarations
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
};
