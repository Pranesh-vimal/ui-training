// You will be given a list of numbers. Find if any two consequtive number forms the provided sum.

// Input
// 5 => number of array elements
// 9 2 1 3 8 => The list of array elements
// 3 => Expected sum

// Output
// 2

// Explanation:
// Consider the sum from start of the array list
// For index 1, 9 + 2 = 11 which is not equal to 3
// For index 2, 2 + 1 = 3 Which is equal to 3. so, index is 2.

function cnumber(arr, sum) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == sum) {
                return i + 1;
            }
        }
    }
    return -1;
}

console.log(cnumber([9, 2, 1, 3, 8], 3));
