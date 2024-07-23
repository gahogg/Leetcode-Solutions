var maxNumberOfBalloons = function(text) {
    const counter = {};
    const balloon = "balloon";

    for (const c of text) {
        if (balloon.includes(c)) {
            counter[c] = (counter[c] || 0) + 1;
        }
    }

    if (!('b' in counter) || 
        !('a' in counter) || 
        !('l' in counter) || 
        !('o' in counter) || 
        !('n' in counter)) {
        return 0;
    } else {
        return Math.min(counter['b'], counter['a'], Math.floor(counter['l'] / 2), Math.floor(counter['o'] / 2), counter['n']);
    }
};
