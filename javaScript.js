let a;
let b;

do {
  a = +prompt('Введите число для основания:');
} while (isNaN(a) || a === 0);

do {
  b = +prompt('Введите число для показателя степени:');
} while (isNaN(b) || b === 0);

let c = a ** b;

console.log("Результат: " + c + "!");