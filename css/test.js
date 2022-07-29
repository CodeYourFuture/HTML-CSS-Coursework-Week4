
 console.log("Hello World!")


function even_or_odd(number) {
  
 /* if (number.isInteger(number) === true){
    return console.error("invalid");
  } */
  
  if (number % 2 === 0){
    console.log("Even");
  } else {
     console.log("Odd");
  }
}

even_or_odd("3");