class Employee {
    constructor(name, id, email) { 
    this.name = name;
    this.id = id;
    this.email = email;
    }

    getName() {
        console.log(`Employee name: ${this.name}`)
        return this.name
    }
    getId() {
        console.log(`Employee id: ${this.id}`)
        return this.id
    }
    getEmail() {
        console.log(`Employee id: ${this.email}`)
        return this.email
    }

    getRole() {
        return Employee
    }
}
module.exports = Employee;