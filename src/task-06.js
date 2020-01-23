"use strict";

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt(`Пожалуйста, введите любое число`);

  if (input === null) {
    break;
  } else if (input = Number(input)) {
    numbers.push(input);
  } else alert(`Ошибка ввода, попробуйте еще раз`);
}
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(numbers);                           //оставил для проверки массива на сохранение чисел
console.log(`Сумма введенных чисел: ${total}`);