/**
 * strings
 *
 */
let message = "Good Morning";
console.log(message.toLowerCase());
console.log(message.toUpperCase());
console.log(message.split("").reverse().join(""));
console.log(message.length);
console.log(message.substring(0, 4));
console.log(message.substring(5));

/**
 * GOOD -> str.substring(0, str.length - 0);
 * GOO  -> str.substring(0, str.length - 1);
 * GO   -> str.substring(0, str.length - 2);
 * G    -> str.substring(0, str.length - 3);
 */
const printTriangleOne = (str) => {
    let result = "";
    for (let i = 0; i <= str.length - 1; i++) {
        result += `${str.substring(0, str.length - i)} \n`;
    }
    return result;
};
let result = printTriangleOne("NAVEEN SAGGAM");
console.log(result);

/**
 * G    -> str.substring(0, str.length - 3)
 * GO   -> str.substring(0, str.length - 2)
 * GOO  -> str.substring(0, str.length - 1)
 * GOOD -> str.substring(0, str.length - 0)
 */
const printTriangleTwo = (str) => {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += `${str.substring(0, str.length - i)} \n`;
    }
    return result;
};
result = printTriangleTwo("NAVEEN SAGGAM");
console.log(result);

/**
 * GOOD
 *  OOD
 *   OD
 *    D
 */


/**
 *     D
 *    OD
 *   OOD
 *  GOOD
 */





