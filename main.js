const name = 'toan';
const age = 23;

console.log(`My name is ${name} and I am ${age}`);

const numbers = new Array(1,2,3,4,5);
console.log(numbers);
console.log(numbers[1]);

const person = {
    firstName : 'Toan',
    lastName : 'Dang Ngoc',
    age : 23,
    hobbies : ['movie', 'music', 'sports'],
    address : {
        street : '38 avenue de Paris',
        city : 'Paris',
        state : 'Ile-De-France'
    }
}

console.log(person.hobbies[1])

const todos = [
    {
        id : 1,
        text : 'Take out trash',
        isCompleted : true
    },
    {
        id : 2,
        text : 'Meeting with boss',
        isCompleted : true
    },
    {
        id : 3,
        text : 'Dentist appointment',
        isCompleted : false
    }
]

console.log(todos[1].text)

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);



// Class
class Person {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = new Date(dateOfBirth);
    }

    getBirthYear() {
        return this.dateOfBirth.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person('Toan', 'Dang Ngoc', '10-17-1997')

console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1);
