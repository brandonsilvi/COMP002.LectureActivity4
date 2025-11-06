let shoeSizes = [5, 8, 10, 13, 15];
console.log(shoeSizes[0]);
console.log(shoeSizes[4]);
/* we pass 8, 10, and 13 because indexes start from 0, our firs election 5
*is in he first slot and 15 is in our final slot */

function iterate(array) {
    for(let i =0; i < array.length; i++){
        console.log(`shoeSizes[${i}]`);
    }
}