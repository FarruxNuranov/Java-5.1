// Объекты
// typeof - ключевое слово для проверки на тип данных
// оператор in делает проверку есть ли указанный ключ в объекте

// let user = {
//     name: 'Zafar',
//     age: 25,
//     working: true
// }

// user.city = 'Tashkent'
// user['country'] = 'Uzb'

// console.log('home' in user);


// let car = {
//     name: 'bmw',
//     color: 'black',
//     year: 2024,
//     available: true
// }

// for(let key in car) {
//     //console.log(key); key - отдает название всех ключей в объекте
//     // console.log(car[key]); отдает значение всех ключей в объекте car
    
//     // console.log('Ключ ' + key + ' значение ключей ' + car[key]);
    
//     console.log(`Ключ ${key} значеник ключа ${car[key]}`);
// }


// функция созданная внутри объекта назся методом

// let car = {
//     name: 'bmw',
//     year: 2010,
//     hi() {
//       return `Машина ${this.name} год ${this.year}`  
//     },
//     turnOn() {
//         alert('Вы завели машину')
//     },
//     turnOff() {
//         alert('Вы заглушили машину')
//     }
// }


// let skills = {
//     html: {
//         level: 'easy',
//         year: 1992,
//     },
//     css: {
//         level: 'medium',
//         year: 1993
//     },
//     js: {
//         level: 'head',
//         year: 1995
//     }
// }

// skills['react'] = {
//     level: 'easy',
//     year: 2013
// }

// console.log(skills);



// for(let key in skills) {
//     for(let newKey in skills[key]) {
    
//         console.log(`ключ ${newKey} значение ${skills[key][newKey]}`);
//     }
// }


let users = {};


for (let i = 1; i <= 10; i++) {

   let name = prompt("Введите ваше имя!");

   let age = prompt("Введите ваш возраст");

   ``

   users[i] = {
       

       name: name,

       age: age

   };

}


for (let key in users) {

   console.log(`Пользователь - ${key}`);

   console.log(`Имя - ${users[key].name}`);

   console.log(`Возраст - ${users[key].age}`);

   
   
}

console.log(users);

         
         
 

 
 
 
 


 
 

