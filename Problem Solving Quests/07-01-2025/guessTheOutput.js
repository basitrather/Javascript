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
function createMultiplier(factor) {
  return function (num) {
    return num * factor;
  };
}

const multiplier3 = createMultiplier(3);
const multiplier5 = createMultiplier(5);

const arr = [1, 2, 3, 4];
const result = arr.map((multiplier3, multiplier5) => {
  return multiplier3(multiplier5);
});

console.log(result);
// output:
//it will throw a syntax error because .map only takes one argument as a callback function