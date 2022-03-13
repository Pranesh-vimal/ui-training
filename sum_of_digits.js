// Input:
// 523
// Output:
// 2
// Explanation:
// As input is 523,
// Step 1: Compute Sum of factorial. 5! + 2! + 3! = 128
// Step 2: Reduce the number to a single digit. Compute sum of digits 1 + 2 + 8 = 11. As the result 11 is a two digit number, again compute sum of digits. 1 + 1 = 2.

// Thus the result is 2

function factorial(x) {
    if (x == 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}

function add(num) {
    var sum = 0;
    if (num == 0) {
        return 0;
    }
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    if (sum.toString().length > 1) {
        return add(sum);
    }
    return sum;
}

var n = 1230;
var sum = 0;
while (n > 0) {
    sum += factorial(n % 10);
    n = Math.floor(n / 10);
}

console.log(add(sum));
