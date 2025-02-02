/**
 * OBJECTS: 
 * USed to store MULTIPLE PROPERTIES in one variable. 
 */
let userFirstName = 'Mark'
let userLastName = 'Howell'
let user = {  // Uses '{}' instead of '[]
    username: 'David',
    email: 'MHowellJr16@gmail.com',
    discordID: 'Howell2567',
    lessonsCompleted: [0,1]
} 
console.log(user.email); // How you ACCESS objects in "console"
console.log(user.email[0]);
console.log(user.lessonsCompleted.map(elem => elem *2)) // can MAP as well 