var firstWord = prompt('Hi! To contunie you need to write 3 words. Type first word, please:');
var secondWord = prompt('Type second word, please:');
var thirdWord = prompt('Type third word, please:');

const numberForMessage = 32154;
const convertedNumber = String(numberForMessage);

const fullMessage = `Good! Here's your First word - ${firstWord}, Second word - ${secondWord}, Third word - ${thirdWord}`;

console.log(`%c${fullMessage}`, "color: #df74b8;font-size: 20px;font-weight: 700;");
alert(fullMessage);

const splittedNumber = `And here's your number: ${convertedNumber[0]} ${convertedNumber[1]} ${convertedNumber[2]} ${convertedNumber[3]} ${convertedNumber[4]}`;
console.log(`%c${splittedNumber}`, "color: rgb(115, 208, 255);font-size: 30px;font-weight: 700;border: 2px solid rgb(115, 208, 255);border-radius: 20px;padding: 10px;");
alert(splittedNumber);