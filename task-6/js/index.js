'use strict';

/*
Задание 6
Напиши функцию calculateTotalPrice(arr, productName), которая получает массив 
объектов и имя продукта (значение свойства name). 
Возвращает общую стоимость продукта (цена * количество).

*/

const calculateTotalPrice = (arr, productName) => {
  const sumGoods = arr.reduce((acc, good) => {
    if (good.name === productName) {
      const totalPrice = good.price * good.quantity;
      acc = totalPrice;
    };
    return acc;
  }, 0);
  return sumGoods;
};

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];


console.log(calculateTotalPrice(products, 'Радар')); // 5200
console.log(calculateTotalPrice(products, 'Дроид')); // 2800