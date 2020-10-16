const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach
// 1. console.log(args)
// 2. console.log(even)
// 2.5. console.log(current Element without item)
// 3. console.log(previuosElements)
// 4. Filter even
// 5. Map 
// 6. Reduce

arr.forEach((item, index) => {
    console.log(item);
});

console.log(arr)

arr.forEach((item) => {
    if (!(item % 2)) {
        console.log(item)
    }
});

arr.forEach((_, index, array) => {
    console.log(array[index])
})

arr.forEach((_, index, array) => {
    if (array[index - 1]) {
        console.log(array[index - 1])
    }
})

let filteredArr = [];

arr.forEach((item, index, array)=>{
    if ((item%2)) {
     filteredArr.push(item)
    }
})

console.log(filteredArr);


const result = arr.filter(item => {
    return item % 2
});

console.log(result);

