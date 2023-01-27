const Employee = require('./employee');

class Engineer extends Employee {
        constructor(name,id,email, github) {
            super(name,id,email);
            this.github = github;
            this.role = 'Engineer';
        }
    
        getRole () {
            const role = 'Engineer';
            return role;
        }
        getGithub () {
            const github = this.github;
            return github;
        }
    
    }



module.exports = Engineer