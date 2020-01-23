"use strict";

const calculateEngravingPrice = function(message, pricePerWord) {
  const splitWords = message.split(` `);
  const wordsSplitted = splitWords.length;
  return wordsSplitted * pricePerWord;
}

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); 

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); 

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); 

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
);