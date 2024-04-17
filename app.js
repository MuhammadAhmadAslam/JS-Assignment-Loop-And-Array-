let arr = [['Name', 'Muhammad Ahmed'], ['Father Name', 'Aslam']];
let matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
let arr_1 = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]
console.log(arr_1);

for (let i = 1; i <= 10; i++) {
    console.log(i);

}

let userTableNumber = prompt("Enter a nimber for table");
let userStartingNumber = prompt("Enter a number to start a table");
let endingNumber = prompt("Enter a number to end a table");
for (let i = userStartingNumber; i <= endingNumber; i++) {
    console.log(`${userTableNumber} X ${i} = ${userTableNumber * i}`);
}

let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
console.log(fruits);
for (let i = 0; i < fruits.length; i++) {
    console.log(`Elements at index ${i} is ${fruits[i]}`);

}


for (let i = 0; i <= 10; i++) {
    console.log(`Counting :  ${i}`);

}
for (let i = 10; i >= 1; i--) {
    console.log(`Reverse Counting : ${i}`);

}
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`Even : ${i}`);
    }
}



for (let i = 1; i <= 20; i += 2) {
    console.log(`Odd : ${i}`);
}


for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`Series : ${i}k`);
    }

}





let index = -1;
let A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
let searchInput = prompt("What do you want to order", 'cookie').toLowerCase()
for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() == searchInput) {
        index = i
        // console.log(`${searchInput} is available at index ${i} in our bakery`);
        break
    } else {
        // console.log(`We are sorry ${searchInput} is not available at our bakery`);
    }

}


if (index != -1) {
    console.log(`${searchInput} is available at index ${index} in our bakery`);
} else {
    console.log(`We are sorry ${searchInput} is not available at our bakery`);
}


let B = [91, 53, 78, 24, 12];
let largest = B[0];
for (let i = 1; i < B.length; i++) {
    if (B[i] > largest) {
        largest = B[i];
    }

}
console.log(`The largest number in array is ${largest} .`);


let C = [91, 53, 78, 24, 12];
let smallest = C[0];
for (let i = 1; i < C.length; i++) {
    if (C[i] < smallest) {
        smallest = C[i];
    }

}
console.log(`The largest number in array is ${smallest} .`);



for (let i = 5; i <= 100; i += 5) {
    console.log(i);

}







