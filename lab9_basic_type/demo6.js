// 0 , "" , NaN , null , undefined
var condition = true
if (condition) {
    console.log('Return True')
} else {
    console.log('Return False')
}

var elements = [0, "", NaN, null, undefined]
console.log("Type of elements:", typeof elements, Array.isArray(elements))

elements.forEach(evaluate)
function evaluate(val, index, array) {
    if (val) {
        console.log(index, val, "Return true")
    } else {
        console.log(index, val, "Return false")
    }
}
console.log(typeof evaluate)
console.log("method2")
elements.forEach((val, index, array) => {
    if (val) {
        console.log(index, val, "Return true")
    } else {
        console.log(index, val, "Return false")
    }
})