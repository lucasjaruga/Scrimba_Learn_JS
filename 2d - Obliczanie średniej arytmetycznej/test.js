const sumOf1To10 = [1,2,3,4,5,6,7,8,9,10].reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
}, 0);


console.log(sumOf1To10);