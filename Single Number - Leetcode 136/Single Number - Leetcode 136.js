var singleNumber = function(nums) {
    let a = 0;
    for (let x of nums) {
        a ^= x;
    }
    return a;
};
