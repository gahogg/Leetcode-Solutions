package solution

func abs(a int) int {
	if a < 0 {
		return a * -1
	}
	return a
}

func findClosestNumber(nums []int) int {
    closeNum := nums[0]
    for i:=1; i<len(nums); i++{        
        if abs(nums[i]) < abs(closeNum){
            closeNum = nums[i]
        }else if abs(nums[i]) == abs(closeNum) && nums[i] > closeNum{
            closeNum = nums[i]
        }
    }
    return closeNum
}
