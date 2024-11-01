'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section

// destructuring objects

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     }, // returns an array

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

// order: function (starterIndex, mainIndex) {
//   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// },

// orderDelivery: function (obj) {
//   console.log(obj);
//   }, 
// };

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);


// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values

// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};

// ({a,b} = obj);
// console.log(a, b);


// // Nested objects

// const {fri} = openingHours;
// console.log(fri);

// const {fri: {open, close}} = openingHours;
// console.log(open, close);

// const {fri: {open: o, close: c}} = openingHours;
// console.log(o, c);



// Destructuring Arrays

// const arr = [2, 3, 4];
// const a = arr[0]; // 2
// const b = arr[1]; // 3
// const c = arr[2]; // 4

// const [x, y, z] = arr; // 2, 3, 4
// console.log(x, y, z); // 2 3 4
// console.log(arr); // [2, 3, 4]

// // const [first, , second] = restaurant.categories; // Italian, Pizzeria
// // console.log(first, second); // Italian Pizzeria

// let [main, secondary] = restaurant.categories; // Italian, Pizzeria
// console.log(main, secondary); // Italian Pizzeria

// // const temp = main; // 1. This will throw an error because main is not defined
// // main = secondary; // 2. This will throw an error because secondary is not defined
// // secondary = temp; // 3. This will throw an error because temp is not defined
// // console.log(main, secondary); // 4. This will throw an error because main and secondary are not defined

// [main, secondary] = [secondary, main]; // Swapping variables
// console.log(main, secondary); // Pizzeria Italian

// //receiving 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse); // Focaccia Pizza

// // Nested destructuring

// const nested = [1, 2, [3, 4]];
// const [i, , [j, k]] = nested; // 1, 2, [3, 4]
// console.log(i, j, k); // 1 [3, 4]

// const [p=1, q=1, r=1] = [8, 9]; // Default values
// console.log(p, q, r); // 8 9 1

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]; // 1, 2, 7, 8, 9