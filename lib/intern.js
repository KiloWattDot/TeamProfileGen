const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) { 
    super(name, id, email);
    this.school = school;
    }
    getSchool() {
        // console.log(`School the intern attends: ${this.school} `)
        return this.school
    }

    getRole() {
        return 'Intern'
    }
    
}

module.exports = Intern;
