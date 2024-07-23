var subsets = function(nums) {
    const res = [];
    const sol = [];
    
    function backtrack(start) {
        res.push([...sol]);
        for (let i = start; i < nums.length; i++) {
            sol.push(nums[i]);
            backtrack(i + 1);
            sol.pop();
        }
    }
    
    backtrack(0);
    return res;
};
