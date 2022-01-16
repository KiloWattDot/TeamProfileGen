const Engineer = require('../lib/engineer')


test("Can set GitHUb account via constructor", () => {
    const testGit = "GitHubUser";
    const engineer = new Engineer("Jay", 1, "test@test.com", testGit);
    expect(engineer.github).toBe(testGit);
  });
  
  test("getRole() should return \"Engineer\"", () => {
    const testRole = "Engineer";
    const engineer= new Engineer("Jay", 1, "test@test.com", "GitHubUser");
    expect(engineer.getRole()).toBe(testRole);
  });
  
  test("Can get GitHub username via getGithub()", () => {
    const testGit = "GitHubUser";
    const engineer= new Engineer("Jay", 1, "test@test.com", testGit);
    expect(engineer.getGithub()).toBe(testGit);
  });