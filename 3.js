
// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');
//
// // получить текущее значение
// alert( buffer() ); // Замыкания Использовать Нужно!
function makeBuffer() {
  var bufStr = '';
  function buf(str) {
    if (arguments.length == 0) {
      return bufStr;
    }
    bufStr += str;
  };
  buf.clear = function() {
    bufStr = '';
  };
  return buf;
};

var buffer = makeBuffer();

// добавить значения к буферу
 buffer('Замыкания');
 buffer(' Использовать');
 buffer(' Нужно!');
//
// // получить текущее значение
//alert( buffer() ); // Замыкания Использовать Нужно
buffer.clear();
//alert( buffer() ); // Замыкания Использовать Нужно
//
function byField(field) {
  return function(a, b) {
    return a[field] > b[field] ? 1: -1;
  };
};
var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

users.sort(byField('name'));
users.forEach(function(user) {
//    alert( user.name );
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function(user) {
  //  alert( user.name );
}); // Маша, Вася, Петя

/*
 Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый, в который входят только те элементы arr, для которых func возвращает true.
 Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», inArray([...]) – "в массиве [...]". Использование должно быть таким:
 filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
 filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.
  .. ваш код для filter, inBetween, inArray */
function filter(arr, func) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
};

function inBetween(a, b) {
  return function(arr) {
    if (arr >= a && arr <= b) return true;
};
};

function inArray(match) {
  return function (arr) {
    for (var i = 0; i < match.length; i++) {
      if (arr == match[i]) return true;
    } 
  }
};

  







var arr = [1, 2, 3, 4, 5, 6, 7];

//alert(filter(arr, function(a) {
  //  return a % 2 == 0
//})); // 2,4,6

//alert( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

//alert( filter(arr, inArray([1, 2, 10])) ); // 1,2
//Следующий код создает массив функций-стрелков shooters. По замыслу, каждый стрелок должен выводить свой номер:

 function makeArmy() {

     var shooters = [];
       for (var i = 0; i < 10; i++) {
             var shooter = function sh() { // функция-стрелок
               alert(sh.i); // выводит свой номер
             };

       shooter.i = i;             
       shooters.push(shooter);
       }
     return shooters;
 }

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9
var sum = function(a) {
  return function(b) {
    return a + b;
  }
};

alert( sum(2)(3) );

