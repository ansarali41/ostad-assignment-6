const removeDuplicates = function (s) {
    const stack = [];

    for (const char of s) {
        if (stack.length > 0) {
            if (stack[stack.length - 1] === char) {
                stack.pop();
            } else {
                stack.push(char);
            }
        } else {
            stack.push(char);
        }
    }

    const result = stack.join('');

    return result;
};

// Test cases
console.log(removeDuplicates('abbaca')); // Output: ca
console.log(removeDuplicates('azxxzy')); // Output: ay

// the time complexity is O(n)
// the space complexity is O(n).
