const generatePassword = require('generate-password');

const password = generatePassword.generate({
  length: 10,  // Longueur du mot de passe
  numbers: true,  // Inclure des chiffres
  symbols: true,  // Inclure des symboles
});

console.log(password);
