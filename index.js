let body = {
    _id:53454354,
    name: "rahbar",
    age: 22
}

const temp = {
    temp: "123",
    age: 21
}
const temp2 = {
    temp: "987",
    age: 45
}
body = {...body, ...temp, _id: undefined}
console.log(body)
