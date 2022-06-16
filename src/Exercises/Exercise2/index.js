// faça uma função que recebe um objeto como primeiro parâmetro e como segundo parâmetro um objeto com dados que vão atualizar o objeto do primeiro parâmetro
// Obs: se no objeto do segundo parâmetro tiver dados que o objeto do primeiro não tem, o valor não deve persistir no objeto de retorno da função, somente
// é atualizado os dados que o objeto do primeiro parâmetro possuir.

// Ex: updateData({ name: "Marcos", country: "Brasil", age: 22 }, { country: "Japão", age: 33 })
// --> saída: { name: 'Marcos', country: 'Japão', age: 33 }

// Ex: updateData({ name: "Marcos", country: "Brasil", age: 22 }, { price: 89.9, amount: 15, description: "camiseta 100% algodão" })
// --> saída: { name: "Marcos", country: "Brasil", age: 22 }

// Ex: updateData({ name: "Rafael", country: "Chile", age: 42 }, { name: "Camiseta Polo", price: 59.9, amount: 30 })
// --> saída: { name: "Camiseta Polo", price: 59.9, amount: 30 }

function updateData(currentObject, newDataObject) {
  //you code here...
  const updatedObject = currentObject;

  for (const key in newDataObject) {
    if (key in currentObject) {
      updatedObject[key] = newDataObject[key];
    }
  }

  return updatedObject;
}

module.exports = updateData;
