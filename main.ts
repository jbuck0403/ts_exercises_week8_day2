// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = "Thieves";
// A: string

let c = [true, false, false];
// A: boolean[]

let d = { age: number };
// A: any but this will not compile

let e = [3];
// A: number[]

let f;
// A: any

let g = [];
// A: never

// 2. What are the compilation errors in each of the following code snippets?
let song: {
  title: string;
  releaseYear: number;
} = {
  title: "Lose Yourself",
};
// A: need to add optional property indicator "?" for releaseYear or add a releaseYear variable
// let song: {
//     title: string;
//     releaseYear?: number;
//   } = {
//     title: "Lose Yourself",
//   };

let prices = [100, 200, 300];
prices[0] = "$100";
// A: prices[0] = 100

function myFunc(a: number, b: number): number {}
// A: it needs a return
// function myFunc(a: number, b: number): number {
//     return a + b
// }
