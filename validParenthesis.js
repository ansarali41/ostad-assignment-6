const isValid = function (s) {
    if (s.length === 0 || s.length % 2 !== 0) {
        return false;
    }
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let el = s[i];
        if (el === '(' || el === '{' || el === '[') {
            stack.push(el);
        } else {
            if (stack.length === 0) {
                return false;
            }
            let top = stack.pop();
            if ((el === ')' && top !== '(') || (el === '}' && top !== '{') || (el === ']' && top !== '[')) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

// Test cases
console.log(isValid('()')); // Output: true
console.log(isValid('()[]{}')); // Output: true
console.log(isValid('(]')); // Output: false

// the time complexity is O(n)
// the space complexity is O(n).
