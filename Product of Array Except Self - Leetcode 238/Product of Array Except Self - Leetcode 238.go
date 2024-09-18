package solution

func productExceptSelf(nums []int) []int {
    res := make([]int , len(nums))
    
    res[0] = 1
    
    for index := 1 ; index < len(nums) ; index++ {
        res[index] = nums[index - 1] * res[index - 1];
    }
    
    suffix := 1;
    
    for index := len(nums) - 1 ; index >= 0 ;index-- {
        res[index] *= suffix
        suffix *= nums[index]
    }
    return res
}
