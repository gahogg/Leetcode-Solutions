var addBinary = function(a, b) {
    let x = BigInt("0b" + a);
    let y = BigInt("0b" + b);

    while (y !== 0n) {
        let answer = x ^ y;
        let carry = (x & y) << 1n;
        x = answer;
        y = carry;
    }

    return x.toString(2);
};
