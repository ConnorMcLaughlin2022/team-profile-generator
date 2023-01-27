const employee = require('./lib/employee');  
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const generateHtml = require('./generateHtml');
const fs = require('fs');
const teamMembers = []



function managerInfo(){
    inquirer.prompt([
    {
        type: 'input',
        message: 'what is the managers name?',
        name: 'managerName'
    },
    {
        type: 'input',
        message: 'enter manager ID number',
        name: 'managerID'
    },
    {
        type: 'input',
        message: 'enter managers email',
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: 'enter managers office number',
        name: 'officeNum'
    }
    ]).then(ans=>{
        const newManager = new Manager(ans.managerName, ans.managerID, ans.managerEmail, ans.officeNum)
        teamMembers.push(newManager)
        console.log(teamMembers)
        // create manager
        menu()
    })
}
function menu(){
    inquirer.prompt([
        {
            type: 'list',
            message: 'what would you like to do?',
            choices : ['add a engineer','add a intern', 'finish building team' ],
            name: 'nextStep'
        }
    ]).then(ans=>{
        if(ans.nextStep==='add a engineer'){
            engineerInfo();
        }else if(ans.nextStep==='add a intern'){
            internInfo();
        } else {
            console.log('alright! team complete!')
            fs.writeFile(`./output/index.html`,generateHtml(teamMembers), (err)=>
            err ? console.log(err) : console.log('working')
            )
        }
    })
}
function engineerInfo(){
    inquirer.prompt([
    {
        type: 'input',
        message: 'what is the engineers name?',
        name: 'engineerName'
    },
    {
        type: 'input',
        message: 'enter engineer ID number',
        name: 'engineerID'
    },
    {
        type: 'input',
        message: 'enter engineer email',
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: 'enter engineers github username',
        name: 'github'
    }
    ]).then(ans=>{
        const newEngineer = new Engineer(ans.engineerName, ans.engineerID, ans.engineerEmail, ans.github)
        teamMembers.push(newEngineer)
        console.log(teamMembers)
        // create engineer
        menu()
})
}
function internInfo(){
    inquirer.prompt([
    {
        type: 'input',
        message: 'what is the intern name?',
        name: 'internName'
    },
    {
        type: 'input',
        message: 'enter intern ID number',
        name: 'internID'
    },
    {
        type: 'input',
        message: 'enter mintern email',
        name: 'internEmail'
    },
    {
        type: 'input',
        message: 'enter the school of the intern',
        name: 'school'
    }
    ]).then(ans=>{
        const newIntern = new Intern(ans.internName, ans.internID, ans.internEmail, ans.school)
        teamMembers.push(newIntern)
        console.log(teamMembers)
        menu()
    })
}
managerInfo();
