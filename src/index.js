module.exports = function toReadable (number) {
    let num = number;
    let arr = [
        ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
        ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        ['hundred']
    ];
    let result = '';
    outer: for(let i = 0; i < number.toString().length; i++) {
        let arrNumber = number.toString().split('');
        if(number === 0)  return 'zero';
            if (num >= 100) {
                result += arr[0][arrNumber[i]] + ' ' + arr[3][0];
                if(num % 100 !== 0) {
                    result += ' ';
                } else {
                    break outer;
                }
                num %= 100;
            } else if (num % 10 === 0 && num !== 10) {
                result += arr[1][arrNumber[i] - 2];
                break outer;
            } else if (num > 20) {
                result += arr[1][arrNumber[i] - 2] + ' ';
                num %= 10;
            } else if (num < 20 && num > 10) {
                result += arr[2][arrNumber[number.toString().length - 1] - 1];
                break outer;
            } else if (num <= 10) {
                result += arr[0][num];
                break outer;
            }
    }

    return result;
}
// if (num > 100) {
//     result += arr[0][number.toString().split('')[i] - 1] + ' ' + arr[3][0] + ' ';
//     num = number % 100;
//     // continue otyr;
//     // if(number % 100 >)
// } else if (num < 20 && num > 10) {
//     result += arr[2][number.toString().split('')[i] - 2];
//         num = num % 10;
// } else if (num > 10) {
//     result += arr[1][number.toString().split('')[i] - 2];
//         num = num % 10;
// } else if (num <= 10 && num % 10 !== 0) {
//     // if(num.toString().split('').length > 1) {
//         result += ' ';
//     // }
//     result += arr[0][num - 1];
// }
