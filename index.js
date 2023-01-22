let body = {
    _id:53454354,
    name: "rahbar",
    age: 22
}

const temp = {
    temp: "123",
    age: 21
}
body = {...body, ...temp, _id: undefined}
console.log(body)
