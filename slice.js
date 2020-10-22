// Slice[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => [4, 5, 6]
// Splice [1, 2, 3, 7, 8, 9, 10], [4, 5, 6] => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Slice or Splice [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => [1, 2, 3, 4, 5, 999, 7, 8, 9, 10]


// Show average salary for users
// {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// } => X

// Count object properties 
// {
//   name: 'John',
//   age: 30
// } => 2

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const res = arr.slice(3, 6)

console.log(res)


const arr1 = [1, 2, 3, 7, 8, 9, 10]

arr1.splice(3, 0, 4, 5, 6)
console.log(arr1)

arr.splice(5, 1, 999,)
console.log(arr)


const people = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
console.log(Object.keys(people))
console.log(Object.values(people))
console.log(Object.entries(people))


const newArray = Object.values(people)
const average = newArray.reduce((accumulator, currentValue) => (accumulator + currentValue), 0) / newArray.length;
const averageRound = Math.round(average * 10) / 10;
console.log(averageRound)

let sum = 0;
newArray.forEach((item) => {
    sum += item;
});

sum /= newArray.length;
console.log(sum)



const person = {
    name: "John",
    age: 30,
    sayHi: function () {
        return `Hi, my name is ${this.name} `;
    },
};
console.log(person.sayHi())

const countTask = (Object.keys(person)).length
console.log(countTask)
