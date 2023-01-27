class Employee{
    constructor(name,id,email,role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role ='Employee';
}


getRole () {
    const role = 'Employee';
    return role;
}
getName () {
    const name = this.name;
    return name;
}
getId () {
    const id = this.id;
    return id;
}
getEmail () {
    const email = this.email;
    return email;
}
}
module.exports = Employee 