'use strict';

/* 
Задание 3
Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников 
и возвращает имя самого продуктивного (который выполнил больше всех задач). 

Сотрудники и кол-во выполненых задач содержатся как свойства 
объекта в формате "имя":"кол-во задач".
*/

//!!! Решение сортировкой

const findBestEmployee = (employees) => {
  const arrEmployees = Object.entries(employees);

  for (let i = 1; i < arrEmployees.length; i ++) {
    if (arrEmployees[i][1] < arrEmployees[i - 1][1]) {
      const tmp = arrEmployees[i];
      arrEmployees[i] = arrEmployees[i - 1];
      arrEmployees[i - 1] = tmp;
    };
  };
 
  return arrEmployees[arrEmployees.length - 1];
};


console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux


// ------------------------------------------------
// Решение reduce
//!!! Это Вы мне решили, здесь нечего проверять

const findBestEmployeerReduce = (obj) => {
  const arrEmployers = Object.entries(obj);

  const best = arrEmployers.reduce(
    (acc, [key, value]) =>  
    value > acc[1] ? [key, value] : acc, ["", 0]
    );

  return best[0];

};


console.log(
  findBestEmployeerReduce({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployeerReduce({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployeerReduce({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
