var a1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
var a2 = Array.from('abcdefg')
var a3 = 'abcdefg'.split('')
console.log(a2, a2, a3)
console.log(Array.isArray(a1), Array.isArray(a2), Array.isArray(a3))
var a4 = new Array()
a4.push('a')
a4.push('b')
a4.push('c')
a4.push('d')
console.log(a4, Array.isArray(a4))
// push pop
console.log(a1.pop(),a1)
a1.push('G')
console.log(a1)
console.log(a2.shift(), a2)
a2.unshift('A')
console.log(a2)