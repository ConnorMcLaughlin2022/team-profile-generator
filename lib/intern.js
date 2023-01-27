const Employee = require('./employee');

class Intern extends Employee {
    constructor(name,id,email, School){ 
    super(name,id,email);
    this.school = School;
    this.role = 'Intern';
    
    }
    getRole () {
        const role = 'Intern';
        return role;
    }
    getSchool () {
        const school = this.school;
        return school;
    }
}

module.exports = Intern