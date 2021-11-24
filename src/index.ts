// Basic Types
let id: number = 5
let company: string = 'Jordan'
let isPublished: boolean = true
let x: any = 'Hello World'
let age: number

// Identifying Type of Data in Array
let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'Hello']

// Tuple to Specify Types Allowed
let person: [number, string, boolean] = [1, 'Jordan', true];

// Tuple Array
let  employee: [number, string][]
employee = [
    [1, 'Jordan'],
    [2, 'Emily'],
    [3, 'Daniel']
]

// Union (Variables to Hold More Than One Type)
let pid: string | number;
pid = '22'

// Enum [Numbers] (Define Set of Named Constants)
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

// Enum [Numbers] (Define Set of Named Constants)
enum Direction2 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

// Objects
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'Jordan'
}

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// FUNCTIONS
//  x, y, and return are all numbers
function addNum(x: number, y: number): number {
    return x + y;
}

function log(message: string | number): void {
    console.log(message)
}

// Interfaces (i.e. specific structure to an object or function)

interface UserInterface {
    // read only property
    readonly id: number,
    name: string
    // "?" signifies optional property
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'Jordan',
}

// type Point = number | string 
// const p1: Point = 1

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;