const Employee = require('../lib/employee')

describe('Employee', () => {
    describe('Initialization', () => {
        it('should create an object with properties name, id, email', () => {
            const employee = new Employee();

            expect(typeof(employee)).toBe("object")
        })

        it("Can set name via constructor", () => {
            const testName = "Dorothy";
            const employee = new Employee(testName);
            expect(employee.name).toBe(testName); 
        })
        it("Can set id via constructor", () => {
            const testID = 101;
            const employee = new Employee("Dorothy", testID);
            expect(employee.id).toBe(testID); 
        })
        it("Can set email via constructor", () => {
            const testEmail = "Dorothy101@email.com";
            const employee = new Employee("Dorothy", 101, testEmail);
            expect(employee.email).toBe(testEmail); 
        })
        describe('getName', () => {
            it("Can retrieve name from Employee object", () => { 
            const testName = "Reggie";
            const employee = new Employee(testName);
            expect(employee.getName()).toBe(testName);
            })
        })
        describe('getId', () => {
            it("Can retrieve id from Employee object", () => { 
            const testID = 202;
            const employee = new Employee("Reggie", testID);
            expect(employee.getId()).toBe(testID)
            })
        })
        describe('getEmail', () => {
            it("Can retrieve email from Employee object", () => { 
            const testEmail = "Reggie202@mail.com";
            const employee = new Employee("Reggie", 101, testEmail);
            expect(employee.getEmail()).toBe(testEmail)
            })
        })
        describe('getRole', () => {
            it("Can retrieve role from Employee object", () => { 
            const testRole = "Employee";
            const employee = new Employee("Reggie", 101," Reg101@mail.com");
            expect(employee.getRole()).toBe(testRole)
            })
        })
    })
})
