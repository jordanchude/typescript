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

interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

// Classes
// Implement person class with PersonInterface
class Person implements PersonInterface{
    // public by default
    // add private to only access property in class
    // private id: number
    // protected means only accessible in class and extended from class
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

// Subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        // call in "id" and "name" from Person class
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')


const mike = new Person(2, "Mike");
const jordan = new Person(1, 'Jordan');

console.log(emp.name);
console.log(emp.register())