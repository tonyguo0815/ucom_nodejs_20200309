var e1 = "Firebase, Foo, foo, function, xyz".replace(/[Ffx]/g, 'q')
console.log(e1)
var e2 = "Firebase, Foo, foo, function, xyz".replace(/f/g, 'q')
console.log(e2)
var e3 = "Firebase, Foo, foo, function, xyz".replace(/f/gi, 'q')
console.log(e3)
var e4 = "Firebase, fFoo, Ffoo, function, xyz".replace(new RegExp("[Ff]","g"),"q")
console.log(e4)