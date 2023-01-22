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

const temp3 = {
    temp: "9999",
    age: 77
}
body = {...body, ...temp, _id: undefined}
console.log(body)
