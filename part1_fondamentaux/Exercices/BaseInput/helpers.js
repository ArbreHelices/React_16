
const isBinary = (number) => {
    let isB = true;
    if (number !== '') {
        for (let b of String(number)) {
            if (b != '1' && b != '0') {
                isB = false;
                break;
            }
        }
    }

    return isB;
}

const decimalToBinary = (num) => {
    
    if (
        num == ''
        ) return 0;

    let b = [];

    while (num > 0) {
        let r = num % 2;
        b.push(r);

        num = Math.trunc(num / 2);
    }

    return b.reverse().join('');
}

const binaryToDecimal = (num) => {
    if (
        num == '' || Number.isNaN(parseInt(num)) 
        ) return 0;

    return parseInt(num, 2);
}

const isInteger = (num) => {
    return ( Math.round( 10 * num/10) - num  === 0 );
};