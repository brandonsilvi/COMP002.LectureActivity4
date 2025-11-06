let shoeSizes = [5, 8, 10, 13, 15];
console.log(shoeSizes[0]);
console.log(shoeSizes[4]);
/* we pass 8, 10, and 13 because indexes start from 0, our firs election 5
*is in he first slot and 15 is in our final slot */

function iterate(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`array[${i}]= ${array[i]}`);
    }
}
iterate(shoeSizes);
shoeSizes.push(7);
shoeSizes.push(11);
shoeSizes.push(16);
shoeSizes.push(9);
shoeSizes.push(12);
iterate(shoeSizes);
//these pushes add values (7, 11, 16, 9, 12) to the end of the array
shoeSizes.pop();
shoeSizes.pop();
shoeSizes.pop();
iterate(shoeSizes);
//the contents of the array are now (5, 8, 10, 13, 15, 7, 11)

let myString = "My shoe size is 14 and its a pain finding shoes in person"
console.log("String length:", myString.length);
