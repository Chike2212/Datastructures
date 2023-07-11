console.log("This is DS in JS")

// Data structure 
// Array
// Object
// Set
// Map


//Arrays
let data = [true, 34, "Hello Man", 867, 900];

console.log(data.length); // get us the total elements in the array
console.log(data[0]); // accessing member of array 

//change the value at an index in the array
data[3] = new Date(); //method 1
data.splice(1,1,4567890); 

// adding more items to the array
// push(), unshift(),
data.push('the new Item pushed', 'Audu', 23, 'yes', 89776, false, 90000900, new Date().getFullYear()); // adding elements at the end of the array

 data.unshift('new Item unshifted'); //add elements at the begining of the array
 let newData = [68,6,77,8777,8,3,333,223442,655,9079796990];

//adding the newData array into the data array
//1.
data.unshift(newData);
data.unshift(...newData);

//deleting the entire array;
// data=null;

//removing elements from the array
let removedItem = data.pop(); //removes the last element in the array
let removedItem2 = data.shift(); //removes the first element in the array

console.log(`The popped item was: ${removedItem} and shiftedItems: ${removedItem2}`);

// filtering out unqiue members of array
let filteredData = data.filter((item)=> typeof item == 'number');
console.log(filteredData)

// convert an array to a string and returns the string representation of that array
console.log(data.toString())

//finding the index of a given item in the array
let idx = data.indexOf(223442);

console.log(` The index of 223442 in the array below is ${idx}`);

//checkin if an item exist in the given array
let exist = data.includes('223442');

console.log(exist);

console.log(data);

// creating a copy of the number array
let numCopy = [...filteredData] || filteredData.slice();

// revers the order of an array
numCopy.reverse(numCopy);

// sorting the array

numCopy.sort((a,b)=> a - b);

console.log(numCopy);

//using the map and forEach methods of the array
let ROI = [];
numCopy.forEach((item) => {
    let roi = Number( (item * (4.5/100) ).toFixed(3) ) ;
    ROI.push(roi);
});

console.log(ROI);



// Using the map method

let roi_res =numCopy.map( (item) => Number( ( item * (4.5/100) ).toFixed(3) ) );
console.log(roi_res);


// using splice ==> creating sub arrays out of an exisiting array
let newNumCopy = numCopy.slice(0,4);
console.log(newNumCopy);

let newNumCopy2 = numCopy.slice(-2);
console.log(newNumCopy2);


//join

let newNumCopyJoined = numCopy.join('&');
console.log(newNumCopyJoined);

// using the find Method
let found = numCopy.find((item) => item > 7);
console.log(found);


let ar = [ [3,4,6,7,82,32,"hello"], 65, true, [6784,677,888,1323,"world"] ] 
let singleArr = ar.flat(1);
console.log(singleArr)

//comparing two arrays
let one = [1,2,3];
let two = [1,2,3];

console.log(one.join("").toString === two.join("").toString);


///Object

