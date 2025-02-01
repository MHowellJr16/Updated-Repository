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
/**
 * MAPPING
 */
// Used when you want to CHANGE and element in your array
// Regular Method, same as FILTER
let mapArray = [1, 3, 45, 67]
mapArray.map((element) => {
    console.log(element)
})
//CHANGE METHOD
let newMapArray = mapArray.map((element) => {
    console.log(element)
    return undefined;
}) // EVERY ELEMENT IS CHANGED to "undefined", whatever is "returned" will be PRINTED. 
console.log(newMapArray)
// Can also do this on ONE LINE OF CODE
let bestMapArray = mapArray.map((element) => 'Daddy')
console.log(bestMapArray)
// DOLLAR EQUATION
let dollars = [1, 10, 9, 25]
let cents = dollars.map(element => {
    return element * 100
})
console.log(cents)
// One line of code
let newCents = dollars.map((element) => element * 100)
console.log(newCents)
// FOR LOOP
let realCentsArray = []
for (let i = 0; i < dollars.length; i++) {
    realCentsArray.push(dollars[i] * 200);
}
console.log(realCentsArray)