package solution

func summaryRanges(nums []int) []string {
	res := []string{}
    if(len(nums)==0){
        return res
    }
	i, j := 0, 0
	for i < len(nums)-1 {
		if nums[i] != nums[i+1]-1 {
			if i == j {
				res = append(res, strconv.Itoa(nums[i]))
			} else {
				res = append(res, fmt.Sprintf("%d->%d", nums[j], nums[i]))
			}
			j = i + 1
		}
		i++
	}
	if i == j {
		res = append(res, strconv.Itoa(nums[i]))
	} else {
		res = append(res, fmt.Sprintf("%d->%d", nums[j], nums[i]))
	}
	return res
}
