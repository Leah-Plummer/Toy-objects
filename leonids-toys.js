const toys = [
    {
    id: 1,
    name: "Ball",
    cost: 4.99,
    inStock: true
},

{
    id: 2,
    name: "Barbie",
    cost: 10.99,
    inStock: false
},

{
    id: 3,
    name: "Jacks",
    cost: 2.99,
    inStock: true
}
]
const truck = {
    id: 3,
    name: "Truck",
    cost: 7.99,
    inStock: true
}
const top = {
    id: 4,
    name: "Top",
    cost: 2.99,
    inStock: false
}

 
toys.push(truck)
toys.push(top)
for (const toy of toys){
    let status 
    if (toy.inStock === true){
         status = "is"
    } else {
        status = "is not"
    }
    toy.cost += toy.cost * 0.05 

console.log(`The $${toy.cost} ${toy.name} ${status} in stock!`)
}