function createCounter() {
  let count = 0;
  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    }
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();
counter.increment();

// Output:
// 1
// 2
// 1
// 2

// *Explanation**:
// - `increment()` increases `count` and remembers the updated value (closure retains state).
// - `decrement()` decreases `count` and works similarly.
// - Each call adjusts `count` based on the previous value, showcasing the behavior of closures.

const outer = () => {
  let outerVar = 5;

  const inner = () => {
    let innerVar = 10;
    console.log(outerVar + innerVar);
  };

  return inner;
};

const myFunction = outer();
myFunction();

//output: 15
// The inner can access the outer because its closure

let book = {
  title: "JavaScript Basics",
  author: "John Doe",
  details: function() {
    return `${this.title} by ${this.author}`;
  }
};

let books = [book, { title: "CSS for Beginners", author: "Jane Smith", details: function() { return `${this.title} by ${this.author}`; } }];

console.log(books[0].details());
console.log(books[1].details());

//Output: 
//JavaScript Basics by John Doe
//CSS for Beginners by Jane Smith

//because each object in the books array has a details() method. When details() is called on an object, it accesses the object’s properties (title and author) using this. This ensures that the correct properties are returned for each object when calling the details() method.