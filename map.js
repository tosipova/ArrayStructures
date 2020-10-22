const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Method Map

arr.map((item) => {
    console.log(item);

    return item + 1;
})

const newArray = arr.map((item) => {
    if (!(item % 2)) {
        return 'WOW'
        console.log(item)
    }
    return item;
});

console.log(newArray);

arr.map((_, index, array) => {
    if (array[index - 1]) {
        console.log(array[index - 1])
    }
})
//  3. Filter even

const res1 = arr.filter((item) => {
    if (!(item % 2)) {
        return item
    }
})
console.log(res1)


// reduce sum 

const sum = arr.reduce((result, arr) => {
    return result + arr;
}, 0);
console.log(sum)

// Array
// Write a function that reverts the input array. Please, do not use array.reverse(); to make this task more enjoyable. 
// [1, 2, 3] => [3, 2, 1] 


// Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null 
// [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3] 


// Write a method that returns an object composed of key-value pairs. 
// [['a', 1], ['b', 2]] => { a: 1, b: 2 } 


let user = {}
user.age = 45;
user["street-address"] = 90;
const propertyInVariable = "One more property name";
user[propertyInVariable] = '';
console.log(user)


// let o2 = {}
const arr3 = [['a', 1], ['b', 2]]
// arr3.forEach((arr) => {
//     const attrName = arr[0]
//     const attrValue = arr[1]
//     o2[attrName] = attrValue
// })
// console.log(o2)

const keyValueObject = arr3.reduce((acc, curArr) => {
    const [attrName, attrValue] = curArr;
    acc[attrName] = attrValue;
    return acc;
}, {});

console.log(keyValueObject);


// For each value in the array create and return an object. Use forEach method
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => [{value: 1}, {value: 2}, ...]


const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result10 = arr5.map((item) => {
    return { value: item }
})
console.log(result10)