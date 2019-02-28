
function isEmpty(obj) { // obj - это параметр функции
  for (var key in obj) {//for..in последовательно 
  	//переберёт свойства объекта obj, имя каждого 
  	//свойства будет записано в key.
    return false;
  }
  return true;
}

var Obj1 = {}; //создаем пустой обьект

console.log("Пустой список")
console.log(isEmpty(Obj1))

Obj1["q"] = "1"; //запись свойства в Obj1

console.log("Заполненный список")
console.log(isEmpty(Obj1));
