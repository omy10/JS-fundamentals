const size = Number(process.argv[2]);

if(isNaN(size)){
    console.log("missing size")
}else {
    for(i = 0; i< size; i++){
        console.log("x".repeat(size))
    }
}