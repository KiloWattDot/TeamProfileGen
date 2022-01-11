
// Program Start 

console.log('Welcome to the Team Generator!')
console.log('Use "npm run reset" to reset the dist/ folder')

const questions = [
    {
      type: "input",
      name: "Manager",
      message: "What is your Team manager's name?",
    },{ 
      type: "input",
      name: "ManagerId",
      message:
        "What is your Team manager's id number?",
    },
    {
      type: "input",
      name: "ManagerEmail",
      message: "What is your Team manager's Email?",
    },
    {
      type: "input",
      name: "ManagerOffice",
      message: "What is your Team manager's Office number?",
    },
    {
      type: "list",
      name: "NextTeamMember",
      message: "Which type of team meber would you like to add?",
      choices: ["Engineer", "Intern", "I don't want to add any more team members"],
    },
    {
      type: "input",
      name: "Engineer",
      message: "What is your Engineer's name?",
    },
    {
      type: "input",
      name: "EngineerId",
      message: "What is your Engineer's id number?",
    },
    {
      type: "input",
      name: "EngineerEmail",
      message: "What is your Engineer's email?",
    },
    {
      type: "input",
      name: "EngineerGit",
      message: "What is your Engineer's Github username?",
      
    },
    {
      type: "input",
      name: "Intern",
      message: "What is your Intern's name?",
    },
    {
      type: "input",
      name: "InternId",
      message: "What is your Intern's id number?",
    },
    {
      type: "input",
      name: "InternEmail",
      message: "What is your Intern's email?",
    },
    {
      type: "input",
      name: "InternSchool",
      message: "What is college your Intern is attending?",
    },
    
  ];
  
  

  
  
  
  
  

  

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {

//     fs.writeFile("GENERATED-README.md", data, (err) => {
//         err
//           ? console.log(err)
//           : console.log("GENERATED-README.md file was created and written!");
//       });

// }

// // TODO: Create a function to initialize app
// function init() {
//     return inquirer.prompt(questions).then((data) => {
//         writeToFile("GENERATED-README.md", generateMarkdown(data));
//       });
// }
