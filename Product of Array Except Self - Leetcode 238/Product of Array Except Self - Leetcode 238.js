function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n);
    
    let leftProduct = 1;
    let rightProduct = 1;
    
    // Calculate left products
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }
    
    // Calculate right products and final result
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return result;
}
