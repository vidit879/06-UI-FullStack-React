/**
 * Statements
 * 1. if-else
 * 2. switch
 * 3. for-loop
 * 4. while
 * 5. do-while
 */

// if-else
/**
 * if(condition){
 *     // true
 * }
 * else{
 *     // false
 * }
 */

/**
 * if(condition){
 *     // true
 * }
 * else if(condition){
 *     // true
 * }
 * else if(condition){
 *     // true
 * }
 * else{
 *     // false
 * }
 */

/**
 * if(condition){
 *     if(condition){
 *         // true
 *     }
 * }
 * else if(condition){
 *     if(condition){
 *         // true
 *     }
 * }
 * else if(condition){
 *     if(condition){
 *         // true
 *     }
 * }
 * else{
 *     // false
 * }
 */

const currentTime = 7;
let message = "";
if (currentTime > 0 && currentTime <= 12) {
    message = "Good Morning";
} else if (currentTime > 12 && currentTime <= 17) {
    message = "Good Afternoon"
} else if (currentTime > 17 && currentTime <= 23) {
    message = "Good Evening"
} else {
    message = "Invalid Time";
}
console.log(message);

// 2. switch
/**
 * switch(condition){
 *     case match1:
 *       // statements
 *       return;
 *       case match2:
 *       // statements
 *       return;
 *       default:
 *         // statements
 *         return;
 * }
 */
const today = new Date().getDay();
let fullDay = "";
switch (today) {
    case 0:
        fullDay = "SUNDAY";
        break;
    case 1:
        fullDay = "MONDAY";
        break;
    case 2:
        fullDay = "TUESDAY";
        break;
    case 3:
        fullDay = "WEDNESDAY";
        break;
    case 4:
        fullDay = "THURSDAY";
        break;
    case 5:
        fullDay = "FRIDAY";
        break;
    case 6:
        fullDay = "SATURDAY";
        break;
    default:
        fullDay = "INVALID";
        break;
}
console.log(`Today is : ${fullDay}`);

// for-loop
/**
 * for(initialization; condition; incr/decr){
 *     // statements
 * }
 */

/**
 * print from 0 to 10
 */
let result = "";
for (let a = 0; a <= 10; a++) {
    result += `${a} `;
}
console.log(result);

/**
 * print from 40 to 0 diff 2
 */
result = "";
for (let a = 40; a >= 0; a -= 2) {
    result += `${a} `;
}
console.log(result);

/**
 * print the stars 5
 *  *
 *  * *
 *  * * *
 *  * * * *
 *  * * * * *
 */
result = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        result += ` * `;
    }
    result += `\n`;
}
console.log(result);

/**
 * 1
 * 12
 * 123
 * 1234
 * 12345
 */

/**
 * 5
 * 54
 * 543
 * 5432
 * 54321
 */

/**
 * 1
 * 22
 * 333
 * 4444
 * 55555
 */

/**
 * 55555
 * 4444
 * 333
 * 22
 * 1
 */

/**
 * 54321
 * 5432
 * 543
 * 54
 * 5
 */

/**
 * 12345
 * 1234
 * 123
 * 12
 * 1
 */





