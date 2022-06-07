const readline = require('readline').createInterface({
  input: process.stdin
 });

process.stdout.write('Welcome to Holberton Sochool, What is your name?\n');
readline.question('', name => {
  console.log(`Your name is: ${name}`);
  readline.close();
  });

process.stdin.on('end', function() {
  process.stdout.write('This important software is now closing.\n');
});
