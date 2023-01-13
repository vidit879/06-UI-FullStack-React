/**
 * JavaScript Operators
 * 1. math operators + - / *
 * 2. shorthand math operators += -= /= *=
 * 3. conditional operators < > <= >= !==
 * 4. logical operators && ||
 * 5. incr , decr operators ++ --
 * 6. ternary operator ?:
 * 7. equality operators == ===
 */

// 1. math operators + - / *
const num1 = 20;
const num2 = 30;
console.log(`Sum : ${num1 + num2}`);
console.log(`Sub : ${num1 - num2}`);
console.log(`Mul : ${num1 * num2}`);
console.log(`Div : ${num1 / num2}`);
console.log(`Module : ${num1 % num2}`);

// 2. shorthand math operators += -= /= *=
/**
 * var = var + (something) => var += (something)
 * var = var - (something) => var -= (something)
 * var = var * (something) => var *= (something)
 * var = var / (something) => var /= (something)
 */
let price = 100;
let qty = 5;
let total = 10;
//total = total + (price * qty);
total += (price * qty);
console.log(total);

// 3. conditional operators < > <= >= !==
/**
 * qty >= 10 -> available
 * qty <10 > 0 -> runningOut
 * qty == 0 -> out-of-stock
 * @type {number}
 */
let availableQty = 10;
let result = "";
if (availableQty >= 10) {
    result = "Available";
} else if (availableQty < 10 && availableQty > 0) {
    result = "Running Out";
} else {
    result = "Out Of Stock"
}
console.log(`Product Status : ${result}`);

// 4. logical operators && ||
let courseFinished = true;
let projectsFinished = 2;
result = "";
if (courseFinished && projectsFinished >= 2) {
    result = "You are ready for the Job";
} else {
    result = "Please make the projects";
}
console.log(result);

// 5. incr , decr operators ++ --
let theNumber = 10;
theNumber = theNumber + 1;
theNumber += 1;
theNumber++;
console.log(`theNumber :  ${theNumber}`);

// 6. ternary operator ?:
/**
 * (condition) ? true : false;
 */
result = "";
courseFinished = true;
projectsFinished = 2;
(courseFinished && projectsFinished >= 2) ?
    result = "You are ready for the Job" : result = "Please make the projects";
console.log(result);

// 7. equality operators ===
let a = 10;
let b = 20;
if (a === b) {
    console.log("Both are equal");
} else {
    console.log("both are not equal");
}

let mobileOne = {
    brand: "Apple",
    color: "Silver",
    price: 35000
};
let mobileTwo = {
    brand: "Apple",
    color: "Silver",
    price: 35000
};
if (JSON.stringify(mobileOne) === JSON.stringify(mobileTwo)) {
    console.log("Equal");
} else {
    console.log("Not Equal");
}

if (Object.entries(mobileOne).toString() === Object.entries(mobileTwo).toString()) {
    console.log("Equal");
} else {
    console.log("Not Equal");
}






