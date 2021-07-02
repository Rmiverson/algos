// Reverse a given string

const string = 'Welcome to this Javascript Guide!';
const reverse = (string) => {
    const splitString = string.split("");
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
};
const reverseShort = (string) => string.split('').reverse().join('');
console.log(reverseShort(string));