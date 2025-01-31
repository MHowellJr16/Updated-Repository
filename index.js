/**
 * ARRAYS
 */
let item1 = 20
let item2 = 30
// With Arrays, you can include NUMBERS, STRINGS, ETC. 
let arr = [20, 30, 50]
// Accessing FIRST ELEMENT in array!
console.log(arr[0]) // Target the ELEMENT, then target the index of which position, starting with ZERO
// LAST ELEMENT
console.log(arr[2])
//OR
console.log(arr[arr.length-1]) // Makes last element DYNAMIC, no matter how many elements in the string. 
// ADDING ARRAYS
arr.push(200)
console.log(arr); // Adds and ADDITIONAL ELEMENT, will show in console.
 /** CALLBACK FUNCTION: 
  * arr.filter(() => {})  
  * MEMORIZE this syntax above
  */ 
 let newArray = arr.filter((element) => { // CALLING "elemnet" in "()" will print all of the elements in the array
    console.log(element);
    return true;
 })  // Also have to declare a NEW element, hence "let = newArray"
 // In addition, this will only print if it RETURNS "TRUE"
 newArray = newArray.filter((element) => {
    console.log(element)
    if (element < 50) {
        return true;
    }
 }) // You can even add CONDITIONS as well!
 console.log(newArray);
  // SHORT FORM of the same code
 newArray = newArray.filter(element => element < 50) 
 console.log(newArray); 
 // PROBLEM: PRINT GRADES that are NOT FAILING
 // LONG FORM:
let grades = ['A', 'A+', 'A+', 'A', 'FAIL', 'FAIL']
let newGrades = grades.filter((element) => {
    console.log(element)
    if (element !== 'FAIL') {
        return true;
    }
})
console.log(newGrades);
// SHORT FORM
newGrades = grades.filter(element => element !== 'FAIL')
console.log(newGrades);
//LOOPING ARRAYS
for (let i = 0; i < grades.length; i++) {
    console.log(i); 
} // This will print out the INDEXES, one-by-one(i.e. 1, 2, 3, etc.) NOT the ELEMENTS
for (let i = 0; i < grades.length; i++) {
    console.log(grades[i]);
} // Must print NAME of ELEMENT, with "i" inside of "[]"
// Printing GOOD GRADES ONLY, W/O FILTER METHOD
let goodGrades = []
for (let i = 0; i < grades.length; i++) {
if (grades[i] !== 'FAIL') {
    goodGrades.push(grades[i]);
}
}
console.log(goodGrades);
//
let bestArray = [4, 9, 10]
