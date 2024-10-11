fn abs(x: i32) -> i32 {
    if x < 0 {
       return -x;
    }
    x
}

fn find_closest(nums: Vec<i32>) -> i32 {
    let mut closest = nums[0];
    for i in 0..nums.len() {
        if abs(nums[i]) < abs(closest) {
            closest = nums[i];
        } else if  abs(nums[i]) == abs(closest) && nums[i] > closest {
            closest = nums[i];
        }
    }
    closest
}