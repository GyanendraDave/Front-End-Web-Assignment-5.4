// employees list

var employees = [
                    // employees 1
                    {
                     name: "Ashok", age: 30, salary: 20000,
                     address: { city: "Sayla", state: "Rajasthan", pincode: 343021}
                    },
                    // employees 2
                    {
                     name: "Ravi", age: 32, salary: 30000,
                     address: { city: "Ahmedabad", state: "Gujarat", pincode: 343022}
                    },
                    // employees 3
                    {
                     name: "Mukesh", age: 31, salary: 40000,
                     address: { city: "Patiyala", state: "Panjab", pincode: 343023}
                    },
                    // employees 4
                    {
                     name: "Rahul", age: 33, salary: 50000,
                     address: { city: "Kashi", state: "UP", pincode: 343024}
                    },
                    // employees 5
                    {
                     name: "John", age: 35, salary: 60000,
                     address: { city: "Bhopal", state: "MP", pincode: 343025}
                    }
];


// console output
console.log("Name" + " - " + employees[1].name);
console.log("Age" + " - " + employees[1].age);
console.log("Salary" + " - " + employees[1].salary);
console.log("Address");
console.log("City" + " - " + employees[1].address.city);
console.log("State" + " - " + employees[1].address.state);
console.log("Pincode" + " - " + employees[1].address.pincode);

   