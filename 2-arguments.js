const args = process.argv.slice(2);
if (args.lenght === 0){
    console.log("no argument found")
} 
else if (args.lenght === 1){
    console.log("argument found");
}else{
    console.log("argument found")
}


// PS C:\Users\Administrator\OneDrive\Desktop\Front-end alx\JS-fundamentals> node 2-arguments.js hey
// argument found
// PS C:\Users\Administrator\OneDrive\Desktop\Front-end alx\JS-fundamentals> node 2-arguments.js    
// argument found
// PS C:\Users\Administrator\OneDrive\Desktop\Front-end alx\JS-fundamentals> node 2-arguments.js heey
// argument found