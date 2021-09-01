const add = (num1, num2, callback) => {
    setTimeout(() => {
        callback(num1+num2);
    }, 2000);
}

add(2, 4, (sum) => {
    console.log(sum);
})