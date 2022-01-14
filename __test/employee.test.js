const Employee = require('../lib/employee')

describe('Employee', () => {
    describe('Initialization', () => {
        it('should create an object with properties name, id, email', () => {
            const employee = new Employee('Jim', 4, 'jim4@gmail.com');

            expect(employee).toEqual(name, id, email)
        })
    })
})


// describe('getName', () => {
//     it('should return the name of the employee', () => { 
//         const grace = new Employee('Grace', 5, 'grace@gmail.com')

//         grace.getName();

//         expect(grace).toEqual('')

//         employee.
//     })
// })