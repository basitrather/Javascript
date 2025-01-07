// Question 01
let arr = [1, 2, 3];
let obj = { a: 10 };

function modifyArray(array, callback) {
  array.push(4);
  callback();
}

function modifyObject(object) {
  object.a = object.a + 5;
}

modifyArray(arr, () => {
  obj = { a: 50 };
});

modifyObject(obj);

console.log(arr); // ?
console.log(obj.a); // ?

//output:
//[1,2,3,4] 55

//          ----------------------------
// Question 02