function  calculateAge(birth) {
   
  
let currentYear = new Date().getFullYear();
let age = currentYear - birth;





//const  new = document.getElementById(birth);
alert("Your age is:   "+ age);
}





function isPrime(age) {
  // Numbers less than or equal to 1 are not prime.
  if (num <= 1) {
   alert("number is not prime");
  }

  // 2 is the only even prime number.
  if (num === 2) {
    alert ("number is prime");
  }

  // Handle all other even numbers (not prime).
  if (num % 2 === 0) {
   alert("number is not prime");
  }

  // Check for divisors from 3 up to the square root of 'num', incrementing by 2 to skip even numbers.
  const limit = Math.sqrt(num);
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) {
      alert("number is not prime");
    }
  }

  alert("number is prime");
}



function checkAgePrime() {
    calculateAge(birthYear);
    isPrime(age);
}