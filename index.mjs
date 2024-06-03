for (let i = 0; i < 100; i++) {
    if (i % 3 == 0 && i % 5==0) {
        console.log("Fizz Buzz");
       //console.log(i)
    } else if (i % 5 == 0) {
        console.log("Buzz");
       // console.log(i)
    } else if (i % 3==0){
        console.log("Fizz");
       // console.log(i)
    } else {
        console.log(i);
    }
}
  