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

// **Output**:
// 1
// 2
// 1
// 2

// Output:
// 1
// 2
// 1
// 2

// *Explanation**:
// - `increment()` increases `count` and remembers the updated value (closure retains state).
// - `decrement()` decreases `count` and works similarly.
// - Each call adjusts `count` based on the previous value, showcasing the behavior of closures.
