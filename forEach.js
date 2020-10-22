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

arr.forEach((item,) => {
    if ((item % 2)) {
        filteredArr.push(item)
    }
})

console.log(filteredArr);


const result = arr.filter(item => {
    return item % 2
});

console.log(result);

//  reverse

const arr1 = [1, { name: 'Alex' }, 2, 15, 'show me how it works']

// arr1.reverse()
// console.log(arr1)

// arr1.sort((a, b) => {
//     return b - a;
// })
// console.log(arr1)

let res3 = [];
for (let i = arr1.length; i > 0; i--) {
    res3.push(arr1[i - 1]);
};



console.log(res3);

const reversedMap = arr1.map((_, index, array) => {
    return array[array.length - index - 1]

})

console.log(reversedMap)



const arr2 = [0, 1, 'wow', false, 2, undefined, '', 3, null].filter((item) => {
    if (typeof item === "number" && item !== 0) {
        return true
    }
});
console.log(arr2)

const filteredFalsyArr = [0, 1, 'wow', false, 2, undefined, '', 3, null].filter(Boolean);
console.log(filteredFalsyArr)

