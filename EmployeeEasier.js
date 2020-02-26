function Employee() {
	this.name = '';
	this.dept = 'general';
}

function Manager() {
	this.reports = [];
}
Manager.prototype = new Employee

function WorkerBee() {
	this.projects = [];
}
WorkerBee.prototype = new Employee

function SalesPerson() {
	this.dept = 'sales';
	this.quota = 100;
}
SalesPerson.prototype =new WorkerBee

function Engineer() {
	WorkerBee.call(this);
	this.dept = 'engineering';
	this.machine = '';
}
Engineer.prototype =new WorkerBee


const employee1 = new Employee()
const manager1 = new Manager()
const workerBee1 = new WorkerBee()
const salesPerson1 = new SalesPerson()
const engineer1 = new Engineer()

console.log(employee1)
console.log(manager1, manager1.name, manager1.dept)
console.log(workerBee1)
console.log(salesPerso1)
console.log(engineer1)


