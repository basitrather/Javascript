// Shallow copy is when we only copy the primitives from one object to another excluding the objects,arrays, functions etc that are basically stores in the heap, So thier reference is copied no the actual objects, Example:
const obj1 = {
  firstName: "basit",
  lastName: rather,
  luckyNumber: [1, 5, 7, 9],
};
const shallowCopy = { ...obj }; // this only copies the primitive values and copies the reference of objects

// deep copy is when we  copy the primitives and object too from one object to another including the objects,arrays, functions etc that are basically stores in the heap, it is basically the full copy of object, Example:
const obj2 = {
  firstName: "basit",
  lastName: rather,
  luckyNumber: [1, 5, 7, 9],
};
const shallowCopy2 = structuredClone(obj2); // this only copies both the primites and the objects itself
