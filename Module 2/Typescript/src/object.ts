//implicit assigning type
const users = {
    name: "ali",
    age: 45,
    isMarried: true, 
}

// explicit assigning type
const newUsers: {
    company: "P hero"
    name: string,
    age: number,
    isMarried: boolean,
    wife? : string
} = {
    company: "P hero",
    name: "ali",
    age: 45,
    isMarried: true, 
    wife: "hd"  
}
