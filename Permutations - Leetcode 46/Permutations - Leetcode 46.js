function permute(nums) {
    const ans = [];
    const sol = [];
    const used = Array(nums.length).fill(false);

    function backtrack() {
        if (sol.length === nums.length) {
            ans.push([...sol]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            
            sol.push(nums[i]);
            used[i] = true;
            backtrack();
            sol.pop();
            used[i] = false;
        }
    }

    backtrack();
    return ans;
}
