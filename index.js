/**
 * FUNCTIONS
 */
// function DEFINITION
function welcomeMark(name) { // Anything inside "()" is a PARAMATER
    console.log("Welcome to FES, " + name)
}
// CALLING the function
welcomeMark('Mark'); // you EXECUTE funtion by CALLING, or writing it individually. 
/**
 * Paramaters HAVE TO MATCH, if two are DEFINED, then two have to be CALLED. 
 */
function welcome(firstName, lastName) { // INITIALZED in parehtnesees is a PARAMATER {
    console.log('Welcome to FrontEnd Simplified ' + firstName + lastName) 
}
welcome('Mark', " Howell") // All Arguments in paramaters must also be in the SAME ORDER. 
welcome('John', ' Doe')
/**
 * RETURNS
 * An ation where NOTHING ELSE will run after this is called
 */
function fn() {
    return 5 // Code reads this function as a NUMBER, will block out the code below. 
    console.log('my function')
}
fn();
function sumOfTwoNumbers(num1, num2) {
    return num1 + num2 // numbers must be RETURNED
}
console.log(sumOfTwoNumbers(10, 10));
/**
 * FARENHEIGHT to CELSIUS FORMULA
 */
function convertCelciusToFarenhieght(celcius) {
   return celcius * 1.8 + 32 // Would nomrally DEFINE farenheight, but since one lone of code, can use just RETURN
}
console.log(convertCelciusToFarenhieght(0));
// ARROWS
const newCelciusToFarenhieght = () => { // Second way of DEFINIG A FUNCTION
    return 'Mark'
}

console.log(newCelciusToFarenhieght(1))