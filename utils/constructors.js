//Params based on SQL table department
function Department(name) {
    this.deptName = name;
}

//Params based on SQL table roles
function Role(title, salary, department) {
    this.title = title;
    this.salary = salary;
    this.department = department;
}

function Employee(first, last, role, manager) {
    this.firstName = first;
    this.lastName = last;
    this.role = role;
    this.manager = manager;
}

module.exports = constructors;
