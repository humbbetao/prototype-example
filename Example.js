function Person(name, id) {
	this.name = name;
	this.id = id;
}

Person.prototype.getDetails = function() {
	return `${this.name} :: ${this.id}`;
};

class PersonClass {
	constructor(name, id) {
		this.name = name;
		this.id = id;
	}
	getDetails() {
		return `${this.name} :: ${this.id}`;
	}
}

const fred = new Person('Fred', 321);
console.log(fred);
console.log(fred.getDetails());

const fred2 = new PersonClass('Fred2', 345);
console.log(fred2);
console.log(fred2.getDetails());

function EmployeeFunction(name, id, salary) {
	Person.call(this, name, id);
	this.salary = salary;
}
EmployeeFunction.prototype = Object.create(Person.prototype);
EmployeeFunction.prototype.constructor = EmployeeFunction;
EmployeeFunction.prototype.employeeInfo = function() {
	return `${this.name} :: ${this.id} ::${this.salary} `;
};

class EmployeeClass extends PersonClass {
	constructor(name, id, salary) {
		super(name, id);
		this.salary = salary;
	}

	employeeInfo() {
		return `${this.name} :: ${this.id} ::${this.salary} `;
	}
}

const fred3 = new EmployeeFunction('Fred3', 678, '5000');
console.log(fred3);
console.log(fred3.getDetails());
console.log(fred3.employeeInfo());

const fred4 = new EmployeeClass('Fred4', 789, '5000');
console.log(fred4);
console.log(fred4.getDetails());
console.log(fred4.employeeInfo());
