var twoSum = function(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
        let sum = numbers[l] + numbers[r];
        if (sum === target) {
            return [l + 1, r + 1];
        } else if (sum < target) {
            l++;
        } else {
            r--;
        }
    }

    throw new Error("No two sum solution");
};
