class MinStack {
    constructor() {
        this.stk = [];
        this.minStk = [];
    }

    push(val) {
        this.stk.push(val);
        if (this.minStk.length === 0 || val <= this.minStk[this.minStk.length - 1]) {
            this.minStk.push(val);
        } else {
            this.minStk.push(this.minStk[this.minStk.length - 1]);
        }
    }

    pop() {
        this.stk.pop();
        this.minStk.pop();
    }

    top() {
        return this.stk[this.stk.length - 1];
    }

    getMin() {
        return this.minStk[this.minStk.length - 1];
    }
}
