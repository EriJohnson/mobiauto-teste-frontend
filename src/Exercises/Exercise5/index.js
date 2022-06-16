// faça uma função que verifica se a primeira letra de uma string é maiúscula, retorne true ou false

// Exemplo de saída:
// checkIfTheFirstLetterIsUppercase("Brasil") --> true
// checkIfTheFirstLetterIsUppercase("mobiauto") --> false
// checkIfTheFirstLetterIsUppercase("xXx xXx") --> false
// checkIfTheFirstLetterIsUppercase("xDD") --> false
// checkIfTheFirstLetterIsUppercase("Deu Certo!") --> true

function checkIfTheFirstLetterIsUppercase(word) {
  //you code here...
  const firstLetter = word[0];
  const upperCaseFirstLetter = firstLetter.toUpperCase();

  return firstLetter === upperCaseFirstLetter;
}

module.exports = checkIfTheFirstLetterIsUppercase;
