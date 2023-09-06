// class Person {
//     walk() {
//         console.log("Hi, I am a person and I am walking!");
//     }
// }

// class Student extends Person {

//     constructor(name) {
//         super();
//         this.name = name;
//     }

//     sayHi() {
//         console.log("HI, from Student!" + this.name);
//     }
// }

import { Student, STUDENT_COUNT_PER_CLASS, getStudent} from "./Student.js";

const stu1 = new Student("Saptak");
const stu2 = new Student("Scaler");

stu1.sayHi();
stu1.walk();

stu2.sayHi();
stu2.walk();

import * as _ from "./TestModule.js"; 
console.log(_.sayHi());



