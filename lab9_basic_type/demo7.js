var x1 = 'pqrst'
var x2 = "pqrst"
console.log(typeof x1, x1.length)
console.log(typeof x2, x2.length)


var x3 = "abcdefg,1234567,中文輸入也沒有問題"
x3.split(',').forEach( e => {//空字串 無間隔時用
    console.log(".",e)
}) 
