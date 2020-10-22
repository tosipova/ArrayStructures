// Generate a search query string params from array (use reduce)
// [[‘query’, ‘Berlin’], [‘metrics’, ‘imperial’], [‘interval’, ‘’], [‘clouds’, ‘’]] => ‘?query=Berlin&metrics=imperial’

// Какой метод мы будем использовать? reduce
// Добавить правильные аргументы

const options = {
    query: 'Berlin',
    metrics: 'imperial',
    interval: '',
    clouds: '',
};

const array = [["query", "Berlin"], ["interval", ""], ["metrics", "imperial"], ["clouds", ""]];
const res1 = array.reduce((acc, currValue) => {
    const [_, value] = currValue; // ["query", "Berlin"]

    if (value) {

        if (!acc) {
            acc = '?';
        } else {
            acc += '&';
        }

        acc += currValue.join("=");
    }

    return acc;
}, "")


console.log(res1)

// Get a banana item using find method [‘orange’, ‘apple’, ‘banana’] => ‘banana’

const arr = ["orange", "apple", "banana"];
const getItem = arr.find(element => element === "banana");
console.log(getItem);


// Check if array consists of only odd numbers method "every"  [2, 2, 3, 4, 5] => false

const arr1 = [2, 2, 3, 4, 5]
const getOddNumbers = arr1.filter(n => n % 2)

console.log(getOddNumbers)

// Check if array consists of some even numbers using  method "some" [2, 2, 3, 4, 5] => true

const arr2 = [2, 2, 3, 4, 5]
const getEvenNumbers = arr2.filter(n => n % 2 === 0)
console.log(getEvenNumbers)


// Concat two arrays [1, 2, 3] & [4, 5 6] => [1, 2, 3, 4, 5, 6]

const arr3 = [1, 2, 3]
const arr4 = [4, 5, 6]
const res = arr3.concat(arr4)
console.log(res)

