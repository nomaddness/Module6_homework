//Task 6.2
//Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
function isPrime(num) {
    let prime = 'Простое', notPrime = 'Не простое', incorrect = 'Данные не верны';
 
    if (num <= 1) {
       return notPrime;
    }else if (num > 1000) {
       return incorrect;
    };
    for (let i = 2; i <= num / 2; i++) {
       if (num % i === 0) {
          return notPrime;
       }
    }
    return prime;
 }
 console.log(isPrime())