/**
 * data types
 * string
 * number
 * boolean
 * array
 * object
 */
const employeeName = "John";
console.log("Employee Name : " + employeeName); // not used
console.log("Employee Name : " + employeeName + " Data Type : " + typeof employeeName); // not used

/**
 * backtick operator " ' `
 */
console.log(`Employee Name : ${employeeName}`);
console.log(`Employee Name : ${employeeName} Data Type : ${typeof employeeName}`); // always use this

const employeeAge = 40;
console.log(`Employee Age : ${employeeAge}`);

const isManager = true;
console.log(`Is Manager ? ${isManager}`);

// objects
const mobile = {
    brand: "Apple",
    color: "Silver",
    price: 35000,
};
console.log(mobile);
console.log(`Brand : ${mobile.brand}`);
console.log(`Price : ${mobile.price}`);
mobile.brand = "Lenovo";
mobile.isInsured = "YES";
console.log(mobile);


const mobile1 = {
    brand: "Apple",
    color: "Silver",
    price: 35000,
}
const mobile2 = {
    brand: "Lenovo",
    color: "Black",
    price: 25000,
}

// array
let mobiles = [mobile1, mobile2];
console.log(mobiles);
console.log(mobiles[0]);
console.log(`Brand : ${mobiles[0].brand}`);
console.log(mobiles[1]);
console.log(`Brand : ${mobiles[1].brand}`);
mobiles[1] = mobile;
console.log(mobiles);













