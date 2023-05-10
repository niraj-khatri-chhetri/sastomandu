const crypto = require('crypto');

const password = 'mysecretpassword';
const hash = crypto.createHash('sha256').update(password).digest('hex');

console.log(hash); // output: 'dd7ebe8f4d4da4e3e9f01276c92d1981b7d40b4ad2e0e9651da8d4dc4da4e3f'

const storedHash =
  'dd7ebe8f4d4da4e3e9f01276c92d1981b7d40b4ad2e0e9651da8d4dc4da4e3f';

function verifyPassword(password) {
  const hash = crypto.createHash('sha256').update(password).digest('hex');
  return hash === storedHash;
}

console.log(verifyPassword('mysecretpassword')); // output: true
console.log(verifyPassword('wrongpassword')); // output: false
