/**
 * WHILE LOOP
 * Same as "IF STATEMENT"
 */
/**
 * 
 
let count = 1
while ( count <= 6) {
    console.log('This ran')
    count = count + 1
}
let newCount = 1
while (newCount <= 10) {
    console.log(newCount)
    newCount = newCount + 1
}
*/
/**
 * FOR LOOP
 */
// "I" is the INITIALIZER, ALWAYS USE
for (let i = 0; i < 3; i++) { // Instead of "i = i + 1", it is simpler to use "i++"
    console.log(i)
}
for (let i = 1; i <= 20; i++) {
    /**
     * CANNOT PRINT "i % 3", will check the REMAINDER
     * Will print "0", which is a FALSY value. 
     * "=== 0" will check if its EQUAL to 0.  
     */
    console.log(i)
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('Front-End')
    }
    else if (i % 3 === 0) {
        console.log('Simplified')
    }
    else if (i % 5 === 0) {
        console.log('Front-End Simplified')
    }
    else {
        console.log(i)
    }
}
