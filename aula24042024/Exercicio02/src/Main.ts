for (let i = 0; i < 10; i++) {
    let num = Math.ceil(Math.random() * 100);

    num % 2 === 0 ? console.log(num) : i--;
}