'use strict';

/*
Задание 1

Напиши скрипт, который, для объекта user, последовательно:
    добавляет поле mood со значением 'happy'
    заменяет значение hobby на 'javascript'
    заменяет значение premium на false
    выводит содержимое объекта user в формате 
    ключ:значение используя Object.keys() и for...of
*/

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};


const addDescription = (obj, description) => {
  return Object.entries({...obj, ...description});
};


console.log(addDescription(user, {mood: 'happy', hobby: 'javascript', premium: false}));