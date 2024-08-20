var addBinary = function(a, b) {
    // Convert the binary strings to BigInt
    let x = BigInt("0b" + a);
    let y = BigInt("0b" + b);

    // Perform the binary addition using bitwise operations
    while (y !== 0n) {
        let withoutCarry = x ^ y;
        let carry = (x & y) << 1n;
        x = withoutCarry;
        y = carry;
    }

    // Convert the result back to binary and return it as a string
    return x.toString(2);
};
