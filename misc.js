// Part 1 Exercises (use Copilot inline suggestions)

// Exercise 1: Comment-Driven Development
// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n-1);
}

// Exercise 2: Array Operations
const numbList = [1, 2, 3, 4, 5];

// Filter even numbers
const evenNumbers = numbList.filter(num => num % 2 === 0);
console.log(numbList, evenNumbers); // [1, 2, 3, 4, 5], [2, 4]

// Exercise 3: Function from Signature
// Type this on a new line and press Enter:
// function reverseString(str)
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Exercise 4: Process User Data 

function processUserData(users) { 
  if (!Array.isArray(users)) {
    throw new TypeError("processUserData expects an array of user objects.");
  }

  try {
    return users
      .filter(
        user =>
          user &&
          typeof user === "object" &&
          Number.isFinite(user.age) &&
          user.age >= 18 &&
          typeof user.name === "string" &&
          user.name.trim() !== "" &&
          typeof user.email === "string" &&
          user.email.trim() !== ""
      )
      .map(({ name, email }) => ({
        name: name.trim(),
        email: email.trim(),
      }));
  } catch (error) {
    console.error("Failed to process user data:", error);
    return [];
  }
}