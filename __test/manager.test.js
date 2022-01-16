const Manager = require("../lib/manager")

test("Can set officmanagernumber via constructor argument", () => {
  const testOfficeNumber = 100;
  const manager= new Manager("Paula", 1, "test@test.com", testOfficeNumber);
  expect(manager.officeNumber).toBe(testOfficeNumber);
});

test("getRole() should return \"Manager\"", () => {
  const testRole = "Manager";
  const manager= new Manager("Paula", 1, "test@test.com", 100);
  expect(manager.getRole()).toBe(testRole);
});

test("Can get officmanagernumber via getOffice()", () => {
  const testOfficeNumber = 100;
  const manager= new Manager("Paula", 1, "test@test.com", testOfficeNumber);
  expect(manager.getOfficeNumber()).toBe(testOfficeNumber);
});