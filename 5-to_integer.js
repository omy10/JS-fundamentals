const arg = process.argv[2];
const number = Number(arg);

if(!isNaN(number)){
    console.log (`my number is :  ${number}`)
}else{
    console.log("not a number")
}