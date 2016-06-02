/*var vasya = { name: "Вася", age: 23 };*/
//var masha = { name: "Маша", age: 18 };
//var vovochka = { name: "Вовочка", age: 6 };

//var people = [ vasya , masha , vovochka ];

//people.sort(compareAge);
////alert(people);
//for(var i = 0; i < people.length; i++) {
    //alert(people[i].name); // Вовочка Маша Вася
//}
//for (var i = 0; i < people.length; i++) {
  //alert(people[i].age);
//}

//function compareAge(a, b) {
  //if (a.age > b.age) return 1;
  //if (a.age < b.age) return -1;
//}

// теперь people: [vovochka, masha, vasya]
//
// alert(people[0].age) // 6
//
function unique(arr) {
    /* ваш код */
  var res = [arr[1]];
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    var flag = true;
    for (var j=0; j < res.length; j++) {
      if (str == res[j]) {
        flag = false;       
        break;
      }
    }
    if (flag) res.push(str);
  }
  return res;
}

var strings = ["кришна", "кришна", "харе", "харе",
      "харе", "харе", "кришна", "кришна", "8-()"
];


function uniqueObj(arr) {
    /* ваш код */
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    res[arr[i]] = true;
  }
  return Object.keys(res);
}
 
alert( uniqueObj(strings) ); // кришна, харе, 8-()
