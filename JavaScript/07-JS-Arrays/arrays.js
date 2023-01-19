/**
 * collection of objects
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */
let technologies = ["HTML", "CSS", "JavaScript", "Bootstrap"];
console.log(technologies);
console.log(technologies[3]);
console.log(technologies.length);

/**
 * normal for-loop
 */
let result = "";
for (let i = 0; i < technologies.length; i++) {
    result = result + `${technologies[i]} `;
}
console.log(result);

/**
 * for-in loop
 */
result = "";
for (let index in technologies) {
    result = result + `${technologies[index]} `;
}
console.log(result);

/**
 * for-of loop
 */
result = "";
for (let tech of technologies) {
    result = result + `${tech} `;
}
console.log(result);

/**
 * forEach function
 */
result = "";
technologies.forEach(function (tech) {
    result = result + `${tech} `;
});
console.log(result);

/**
 * forEach Arrow
 */
result = "";
technologies.forEach((tech) => {
    result = result + `${tech} `;
});
console.log(result);

/**
 * functions of array
 *
 */

console.log(technologies);
const str = technologies.join("-");
const array = str.split("-");
console.log(array);

/**
 * array of objects
 */
let employees = [
    {
        sno: "A001",
        name: "Rajan",
        age: 25,
        designation: "Software Engineer"
    },
    {
        sno: "A002",
        name: "John",
        age: 30,
        designation: "Sr.Software Engineer"
    },
    {
        sno: "A003",
        name: "Wilson",
        age: 35,
        designation: "Tech Lead"
    },
    {
        sno: "A004",
        name: "Arun",
        age: 40,
        designation: "Manager"
    },
    {
        sno: "A005",
        name: "Laura",
        age: 45,
        designation: "Director"
    }
];
console.log(employees);

// get an employee
const getEmployee = (empId) => {
    let employee = employees.find(employee => {
        return employee.sno === empId;
    });
    return employee;
};

const employeeOne = getEmployee("A004");
console.log(employeeOne);

// get all Junior Employees
const getAllJuniorEmployees = (employees) => {
    let jrEmployees = [];
    for (let employee of employees) {
        if (employee.age <= 30) {
            jrEmployees.push(employee);
        }
    }
    return jrEmployees;
};
let jrEmployees = getAllJuniorEmployees(employees);
console.log(jrEmployees);


const getAllJuniorEmployeesOne = (employees) => {
    return employees.filter(employee => employee.age <= 30);
};
jrEmployees = getAllJuniorEmployeesOne(employees);
console.log(jrEmployees);

/**
 * filter -> [{}]
 * find -> {} | undefined
 * map -> [ages] , [names] , [designation]
 */

// map
const getAllEmployeeNames = (employees) => {
    return employees.map(employee => {
        if (employee.age <= 30) {
            return {
                name: employee.name,
                age: employee.age
            }
        }
    }).filter(item => item);
};
const employeeNames = getAllEmployeeNames(employees);
console.log(employeeNames);

/**
 * countries -> states -> cities
 */
