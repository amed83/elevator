
const orderUp = [0,1,2,3,4]

let floorsList = [1,3,2]

const indexOfFloor = orderUp.indexOf(2)

const spliced = floorsList.splice(indexOfFloor,1)

floorsList.splice(1,0,spliced[0])


console.log(floorsList)