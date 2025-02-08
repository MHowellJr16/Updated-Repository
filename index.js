/**
 * OBJECTS: 
 * USed to store MULTIPLE PROPERTIES in one variable. 
 */
let userFirstName = 'Mark'
let userLastName = 'Howell'
let users = [
    {  // Uses '[]', then uses '{}' for seperate PROPERTIES
    username: 'David',
    email: 'MHowellJr16@gmail.com',
    password: 'Dadisking62',
    discordID: 'Howell2567',
    lessonsCompleted: [0,1],
    }, 
    {
    username: 'Mark',
    email: 'Capwiz28@yahoo.com',
    password: 'Mark.Howell',
    discordID: 'Howell2567',
    lessonsCompleted: [0, 1, 2],
    }
];
console.log(users) // How you ACCESS objects in "console"
console.log(users[0]) // Can LOCATE number of objects like ARRAYS, starting with 0.
console.log(users[0].username) // Can be specific and locate ELEMENTS in objects, i.e. "username"
console.log(users[0].lessonsCompleted.map(elem => elem * 2)) // Can MAP as well
function login(email, password) {
    for (let i = 0; i < users.length; i++) {
        console.log('this ran')
        if(users[i].email === email) {
            console.log(users[i])
            if (users[i].password === password) {
            console.log('details are correct - log user in')
            }
            else {
            console.log('password is incorrect, try again')
            }
        return;
    }
    console.log('could not find an email that matched')
 }
}
login('MHowellJr16@gmail.com', 'Dadisking62');
/**
 * 
 
let userFunction = [
    {
        username : 'Mark',
        email : 'capwiz28@yahoo.com',
        password : 'ThisPassword',
        discordID : 'Howell92',
        lessonsCompleted : [0, 1, 2,]
    }
]
function register(username, email, password, discordID) {
    for (let i = 0; i < userFunction.length; i++) {
        console.log(users[i])
        if (userFunction == userFunction) {
            console.log('Welcome in!')
            users.push
        }
        else {
            console.log('Could not register, information is incorrect')
        }
        return;
    }
}
register('Mark', 'capwiz28@yahoo.com', 'ThisPassword', 'Howell92');
*/
function register(user) {
    users.push(user);
    }

register( {
    username: 'Mark', 
    email: 'MHowellJr16@gmail.com', 
    password: 'Mark.Howell', 
    subscriptionStatus: 'VIP', 
    discordID: 'Howell123', 
    lessonsCompleted: [0, 1]
    }); 
// TIME MARK 14:58
console.log(users);