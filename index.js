
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
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="../dist/style.css" rel="stylesheet">
      <link rel='stylesheet prefetch' href='https://fonts.googleapis.com/icon?family=Material+Icons'>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css">
      <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" data-auto-replace-svg="nest"></script>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
      <title>Team Profile Page</title>
  </head>
  <body>
      <header>
          <h3>TEAM PROFILE</h3>
          <p> Meet the crew!</p>
      </header>
  
      <div class="container">
          <div class="row justify-content-center header">
            <div class="col-12 col-sm-8 col-lg-6">
              <!-- Section Heading-->
              <div class="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                <div class="line"></div>
              </div>
            </div>
          </div>
         
         
          <div class="row">
`;

  fs.writeFile("./dist/Team.html", html, (err) => {
      if (err) { 
        console.log(err);
      }
  });
    console.log("Started")

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
        data = `
        <div class="col-12 col-sm-6 col-lg-3">
        <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
          <!-- Team Thumb-->
          <div class="advisor_thumb"><img src="../images/programmer.png" alt="">
            <!-- Social Info-->
            <div class="social-info">
                <a href="#"> 
                <i class="fab fa-github"></i>  <span>Github </span>
                </a>
                <br><span>${github}</span>
            </div>
          
            </div>

          <!-- Team Details-->
          <div class="single_advisor_details_info">
            <h6>${name}</h6>
            <p class="designation">${role}</p>
            <p class="designation ">${email}</p>
            <p class="designation">id: ${id}</p>
          </div>
        </div>

      </div>`;
      } else if (role === "Intern") {
        const school = member.getSchool();
        console.log(`Intern's University: ${school}`)
        data = ` <div class="col-12 col-sm-6 col-lg-3">
        <div class="single_advisor_profile wow fadeInUp intern" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
          <!-- Team Thumb-->
          <div class="advisor_thumb"><img src="../images/graduating-student.png" alt="">
            <!-- Social Info-->
            <div class="social-info">
                <a href="#"> 
                    <i class="fas fa-user-graduate"></i> <span>Education</span>
                </a>
                <br><span>${school}</span>
               
            </div>
          
            </div>

          <!-- Team Details-->
          <div class="single_advisor_details_info">
            <h6>${name}</h6>
            <p class="designation">${role}</p>
            <p class="designation ">${email}</p>
            <p class="designation">id: ${id}</p>
          </div>
        </div>

      </div>`

      } else {
        const officeNumber = member.getOfficeNumber();
        console.log(`Manager's Office Number: ${officeNumber}`)
        data = ` <div class="col-12 col-sm-6 col-lg-3">
        <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
          <!-- Team Thumb-->
          <div class="advisor_thumb"><img src="../images/manager.png" alt="">
            <!-- Social Info-->
            <div class="social-info">
                <a href="#"> 
                    <i class="fas fa-map-pin"></i> <span>Office</span>
                </a>
                <br><span>${officeNumber}</span>
               
            </div>
          
            </div>

            <!-- Team Details-->
            <div class="single_advisor_details_info">
              <h6>${name}</h6>
              <p class="designation">${role}</p>
              <p class="designation ">${email}</p>
              <p class="designation">id: ${id}</p>
            </div>
          </div>

      </div>`;
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
  const html = ` </div>
          

  </div>
    



</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
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
  
  
  
  
  

  

