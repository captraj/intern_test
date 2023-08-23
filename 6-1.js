function isPalindrome(input) {
    const cleanedInput = input.replace(/\s+/g, '').toLowerCase();
    
    const isPalin = cleanedInput === cleanedInput.split('').reverse().join('');

    if (isPalin) {
        return `${input} is a Palindrome.`;
    } else {
        return `${input} is not a Palindrome.`;
    }
}

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Please provide a word as an argument. Argument field is empty.");
} else {
  const userInput = args.join(" ");
  const result = isPalindrome(userInput);
  console.log(result);
}
