

var x = 123
var y = new Number(123)
console.log(x === y)

function echoMe(name) {
    console.log('echo name :', name)
}
echoMe('Tony')
echoMe('')
echoMe(undefined)
echoMe(null)
echoMe('p', 'q', 'r')
echoMe(['p', 'q', 'r'])