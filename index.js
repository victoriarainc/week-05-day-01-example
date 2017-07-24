const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Give me a sentence.', (answer) => {
  // TODO: Log the answer in a database
  console.log(`"${answer}" is ${answer.length} characters long.`);

  rl.close();
});
