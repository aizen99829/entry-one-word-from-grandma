// One Word From Grandma — entry for the make.fun bounty.
// Prints the one word a grandma would type about AI.
const word = "magic";
if (!/^[A-Za-z]+$/.test(word)) {
  console.error("entry must be exactly one word");
  process.exit(1);
}
console.log(word);
