const Employee = require('./employee');

class Manager extends Employee {
    constructor(name,id,email, officeNumber) {
        super(name,id,email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }
    getRole () {
        const role = 'Manager';
        return this.role;
    }
    getOfficeNumber (){
        // const officeNumber = this.officeNumber;
        return this.officeNumber;
    }

}

module.exports = Manager