const Intern = require( "../lib/intern")

test("Can set school via constructor", () => {
    const testSchool = "UGA";
    const intern= new Intern("Dorothy", 1, "test@test.com", testSchool);
    expect(intern.school).toBe(testSchool);
  });
  
  test("getRole() should return \"Intern\"", () => {
    const testRole = "Intern";
    const intern = new Intern("Dorothy", 1, "test@test.com", "UGA");
    expect(intern.getRole()).toBe(testRole);
  });
  
  test("Can get school via getSchool()", () => {
    const testSchool = "UGA";
    const intern= new Intern("Dorothy", 1, "test@test.com", testSchool);
    expect(intern.getSchool()).toBe(testSchool);
  });