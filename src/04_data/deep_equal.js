function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (obj1 === null || typeof obj1 != "object" ||
    obj2 === null || typeof obj2 != "object")
    return false;

  for (var prop in obj1) {
    /*
     console.log(prop);
     console.log(typeof obj1[prop]);
     console.log(typeof obj2[prop]);
     console.log(obj1[prop]);
     console.log(obj2[prop]);
     */
    if (typeof obj1[prop] == typeof obj2[prop] && typeof obj1[prop] != "object") {
      return (obj1[prop] == obj2[prop]);
    } else if (typeof obj1[prop] == typeof obj2[prop] && typeof obj1[prop] == "object") {
      return deepEqual(obj1[prop], obj2[prop]);
    }
    return false;
  }
}

//var obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// → true
//console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
//console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
