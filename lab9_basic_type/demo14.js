var a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var r1 = a1.join('')
console.log(typeof r1, r1)
var a2 = ['red', 'yellow', 'blue']
var r2 = a2.join('_')
console.log(typeof r2, r2)
var a3 = ['www', 'uuu', 'com', 'tw']
var r3 = a3.join('.')
console.log(typeof r3, r3)
array4 = Array.from('HelooWorld')
console.log(array4.sort())
var sum = 0
a1.forEach(function (element) { sum += element }, this)
console.log("summation of a1 =", sum)
//  **Array處理**