var convert = function(s, numRows) {
    if (numRows === 1) return s;

    let rows = Array.from({ length: Math.min(numRows, s.length) }, () => []);
    let i = 0;
    let goingDown = false;

    for (let char of s) {
        rows[i].push(char);
        if (i === 0 || i === numRows - 1) goingDown = !goingDown;
        i += goingDown ? 1 : -1;
    }

    return rows.flat().join('');
};
