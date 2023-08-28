module.exports = function reverse (n) {
    
    const negative = n < 0;
    let str = Math.abs(n).toString();
    let reversedString = str.split('').reverse().join('')
    let reversedNum = parseInt(reversedString)
    return reversedNum;

}
