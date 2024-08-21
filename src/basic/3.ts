const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Formeaza Obj nou si uneste obj1 cu obj2
const mergedObj = Object.assign({}, obj1, obj2);

console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }

let value: string | number;

let status: 'enable' | 'disable';