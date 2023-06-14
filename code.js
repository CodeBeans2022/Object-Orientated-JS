// let names = ['Jamie', 'Seth', 'Azeez'];

// console.log(names);

// Sorts names alphabetically
// names.sort();

// console.log(names);

// Window Object
// console.log(window);
// console.log(window.innerWidth);

// Primatives are not objects

// let fruit = 'Peach';

// console.log(fruit.length);

// Primative to string object

// let fruit2 = new String('Apple');

// console.log(fruit2);

// Messy code

// Create User One

// let uOneEmail = 'james.com';
// let uOneName = 'James';
// let uOneFriends = ['Beans'];

// Create User Two 
// let uTwoEmail = 'emily.com';
// let uTwoName = 'Emily';
// let uTwoFriends = ['Toast', 'Corn'];

// Create User Three

// let uThreeEmail = 'alex@gmail.com';
// let uThreeName = 'Alex';
// let uThreeFriends = ['Beans'];

// function login(email) {
//     console.log(email, 'is now online');
// }

// function logout(email) {
//     console.log(email, 'has logged out');
// }

// function logFriends(friends) {
//     friends.forEach(friend => {
//         console.log(friend);
//     })
// }

// login(uOneEmail);

// Object Literals

// Incapsulation - capsule is the literals and data inside are the mixtures 

// let userOne = {
//     email: 'james@gmail.com',
//     name: 'James',
//     login: function() {

//     }
// };

// OR

// ECMA 6 Feature - shorthand to declaring functions in objects
// the this keyword in object refers to that particular object. Outside of object scope, this refers to the window object(global object)
// let userOne = {
//     email: 'james@gmail.com',
//     name: 'James',
//     login() {
//         console.log(this.email, 'has logged in');
//     },
//     logout() {
//         console.log(this.email, 'has logged out');
//     }
// };

// console.log(userOne);
// console.log(userOne.login());
// console.log(userOne.logout());
// console.log(userOne.name);

// Updating properties using Dot Notation

// userOne.name = 'Jamie-Lee';

// console.log(userOne);

// userOne.name = 'Alison';

// console.log(userOne);

// Bracket Notation

// console.log(userOne['email']);

// userOne['name'] = 'Max';

// console.log(userOne['name']);

// let prop = 'name'

// console.log(userOne[prop]);

// prop = 'email'

// console.log(userOne[prop]);

// Creating new properties on the object. Methods can be created as well.
// userOne.age = 24;

// console.log(userOne);

// console.log(userOne.age);

// Creating property setting it's value as a function. Not best practice
// userOne.message = function () {
//     console.log('The toes beans');
// }

// console.log(userOne.message());

// Classe Constructors

class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    login() {
        console.log(this.email, 'logged in');
    }
    logout() {
        console.log(this.email, 'logged out');
    }    
}

let userOne = new User('jamie@gmail.com', 'Jamie-Lee');
let userTwo = new User('james@gmail.com', 'James-Lee');

console.log(userOne);
console.log(userTwo);

userOne.login();
userTwo.logout();

// the 'new' keyword
// creates a new empty object {}
// sets the value of 'this' to be the new empty object
// calls the constructor method

// Method chaining

