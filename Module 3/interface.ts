interface User {
    name: string;
    age: number;
}

const user1 : User = {
    name: "Gautam",
    age: 34
}

interface Guest extends User{
    role: string;
}

const guest1 : Guest = {
    name: "Guest",
    age: 34,
    role: 'guest'
} 
console.log(guest1);