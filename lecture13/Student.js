import Person from "./Person.js";

const STUDENT_COUNT_PER_CLASS = 100;
function getStudent() {
    console.log("Student Function");
}

class Student extends Person {

    constructor(name) {
        super();
        this.name = name;
    }

    sayHi() {
        console.log("HI, from Student!" + this.name);
    }
}

// export default Student;

export {
    STUDENT_COUNT_PER_CLASS, 
    getStudent,
    Student
}