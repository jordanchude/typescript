"use strict";
// Basic Types
let id = 5;
let company = 'Jordan';
let isPublished = true;
let x = 'Hello World';
let age;
// Identifying Type of Data in Array
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple to Specify Types Allowed
let person = [1, 'Jordan', true];
// Tuple Array
let employee;
employee = [
    [1, 'Jordan'],
    [2, 'Emily'],
    [3, 'Daniel']
];
// Union (Variables to Hold More Than One Type)
let pid;
pid = '22';
// Enum [Numbers] (Define Set of Named Constants)
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
// Enum [Numbers] (Define Set of Named Constants)
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Jordan'
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// FUNCTIONS
//  x, y, and return are all numbers
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
