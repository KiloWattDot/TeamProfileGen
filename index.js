
// Program Start 
console.log('Welcome to the Team Generator!')
console.log('Use "npm run reset" to reset the dist/ folder')

// import packages
const inquirer = require('inquirer');
const fs = require('fs');

// import classes
const Employee = require('./lib/employee')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern');


function init() {
  startPage()
  teamBuilder();

}


// Prompt questions

function teamBuilder() { 
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your Team member's name?",
    },{ 
      type: "list",
      name: "role",
      message: "Select this memeber's role?",
      choices: ["Engineer", "Intern", "Manager"]
    },{ 
      type: "input",
      name: "id",
      message:
        "What is your Team member's id number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your Team member's email?",
    }])
    .then(({name, role, id, email}) => {
        let roleInfo = '';
        if(role === "Engineer") {
          roleInfo = "Engineer's github username";
        } else if(role === "Intern") {
            roleInfo = "Intern's school off attendace";
        } else {
            roleInfo = "Manager's Office number";
        }
        inquirer.prompt([{
          message: `input the ${roleInfo}`,
          name: "roleInfo"
        },
        {
          type: "list",
          message: "Would you like to add another team member?",
          choices: ["yes", "no"],
          name: "addMember"
      }]) 
      // matching roles and adding the input to new memeber
      .then(({roleInfo, addMember}) =>{
          let newMember;
          if(role === "Engineer") {
            newMember = new Engineer(name, id, email, roleInfo)
          } else if(role === "Intern") {
              newMember = new Intern (name, id, email, roleInfo)
          } else {
              newMember = new Manager(name, id, email, roleInfo)
          }
          // creating the html for the team memebers card and checking 
          // if there are more members being added. If not complete the html page
          createCard(newMember)
          .then(() => {
            if(addMember === "yes") {
              teamBuilder();
            } else {
              completePage();
            }
        })

      })
  
  });
}

// Creates header and body html

function startPage() {
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <title>Team Profile</title>
  </head>
  <body>`;

  fs.writeFile("./dist/Team.html", html, (err) => {
      err
      ? console.log(err)
      : console.log('Started')
  })

}

function createCard(member) {
  return new Promise((resolve, reject) => {
      const name = member.getName();
      const role = member.getRole();
      const id = member.getId();
      const email = member.getEmail();
      let data = '';
      if(role === "Engineer") {
        const github = member.getGithub();
        console.log(`Engineer's github username: ${github}`)
        data = `<div>${github}</div>`;
      } else if (role === "Intern") {
        const school = member.getSchool();
        console.log(`Intern's University: ${school}`)
        data = `<div> ${github}</div>`

      } else {
        const officeNumber = member.getOfficeNumber();
        console.log(`Manager's Office Number: ${officeNumber}`)
        data = `<div>${officeNumber}</div>`;
      }
      console.log("Building Teammate profile")
      fs.appendFile("./dist/Team.html", data, (err) => {
        err
          ?  reject(`Error is: ${err}`)
          : resolve();
      })

  })
}


function completePage() {
  const html = `<div>
   DONE </div>

   </body>
   </html>`;

  fs.appendFile("./dist/Team.html", html, (err) => {
    err
      ? console.log(err)
      : console.log("END")
  })

}
 


init()

// Program End
// console.log('Thanks for providing your Team profile!')
  
  
  
  
  

  

