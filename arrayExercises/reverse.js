function reverse(arr) {
    let temp = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        temp.push(arr[i]);
    } 
    arr.length = 0;
    arr.push(...temp);
    return arr;
}

const array = [1,2,3,4,5,6];
const str = ['a','b','c','d'];

console.log(reverse(array));
console.log(reverse(str));
