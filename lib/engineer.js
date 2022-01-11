const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) { 
    super(name, id, email);
    this.github = github;
    }
    gitGitHub() {
        console.log(`Engineer's Github: ${this.github}`)
        return this.github
    }

    getRole() {
        super.method()
    }


    
}
