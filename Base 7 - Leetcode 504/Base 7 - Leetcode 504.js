var convertToBase7 = function(num) {
    if (num === 0) {
        return '0';
    }

    var originalNum = num;
    num = Math.abs(num);
    var remainders = [];

    while (num > 0) {
        var remainder = num % 7;
        remainders.push(String(remainder));
        num = Math.floor(num / 7);
    }

    if (originalNum < 0) {
        remainders.push('-');
    }

    remainders.reverse();
    return remainders.join('');
};
