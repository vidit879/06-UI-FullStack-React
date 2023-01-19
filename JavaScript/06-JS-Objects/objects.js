let mobile = {
    brand: "Apple",
    color: "black",
    price: 35000
};
console.log(mobile);

// get objects props/keys using dot notation
console.log(`Brand : ${mobile.brand}`);
console.log(`Price : ${mobile.price}`);
console.log(`Color : ${mobile.color}`);
console.log(`Camera : ${mobile.camera}`); // non-existing - undefined

// get objects props/keys using [] notation
console.log(`Brand : ${mobile['brand']}`);
console.log(`Price : ${mobile['price']}`);
console.log(`Color : ${mobile['color']}`);
console.log(`Camera : ${mobile['camera']}`); // non-existing - undefined

// accessing dynamic props
const propName = "color";
console.log(`propName : ${mobile[propName]}`)

// change objects data
console.log(mobile);
mobile.price = 45000;
mobile.camera = "50MP";
console.log(mobile);

// spread operator ...
let product = {
    name: "Tomatos",
    qty: 2,
    price: 20
};
console.log(product);

product = {
    ...product,
    qty: 4,
    price: 40,
    description: "for curry & Juice"
}
console.log(product);

// nested objects
let student = {
    name: "Rajan",
    age: 21,
    college: "CBIT",
    address: {
        street: "ABC Street",
        city: "Hyderabad",
        state: "TS",
        country: "India"
    }
};
console.log(student);
console.log(student.address);

// print the nested data
console.log(`Street : ${student.address.street} ,
             City : ${student.address.city}
             State : ${student.address.state}
             Country : ${student.address.country}`);

// destructuring in objects
let {street, country, city, state} = student.address;
console.log(`Street : ${street} ,
             City : ${city}
             State : ${state}
             Country : ${country}`);

// looping
/**
 * Object.keys()
 * Object.values()
 * Object.entries()
 */
// keys
console.log(Object.keys(mobile));
console.log(Object.values(mobile));
console.log(Object.entries(mobile));

/**
 * iteration
 */
for (let key of Object.keys(mobile)) {
    console.log(key);
}

for (let value of Object.values(mobile)) {
    console.log(value);
}

for (let [key, value] of Object.entries(mobile)) {
    console.log(`key : ${key} value: ${value}`);
}

/**
 * Object to JSON String -> JSON.stringify()
 * JSON String to Object -> JSON.parse()
 */
console.log(mobile);
const jsonMobile = JSON.stringify(mobile);
console.log(jsonMobile);

const mobileObj = JSON.parse(jsonMobile);
console.log(mobileObj);

