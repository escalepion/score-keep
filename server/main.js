import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players';

Meteor.startup(function () {
//     class Person {
//         constructor(name = 'undefined',age = 0) {
//             this.name = name;
//             this.age = age;
//         }
//     sayName () {
//         return `Hey my name is ${this.name}`;
//     }
//     }

//     class Employee extends Person {
//         constructor(name,age,language = 'assembly') {
//             super (name, age);
//             this.language = language;
//         }
//     getGreeting() {
//         if (this.language) {
//             return `Hello my name is ${this.name} and i am ${this.language} developer `;
//         }else {
//             return super.sayName();
//         }
//     }
//     }

// let me = new Employee('akif');
// console.log(me.getGreeting());

// let lang = new Employee('akif', 25 , 'javascript');
// console.log(lang.getGreeting());



// let obj = {
//     name: 'akif' , 
//     printName() {
//         console.log(`Benim adım ${this.name}`);
//     }
// };

// obj.printName();
// setTimeout(obj.printName.bind(obj), 1000);


});
