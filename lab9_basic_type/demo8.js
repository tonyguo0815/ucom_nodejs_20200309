console.log("I hava " + 1 + 2 + "computers")
console.log(1 + 2 + "computers are mine")
console.log("Sunday".indexOf("day"))//Sunday內找day 在第三位找到 回傳3
console.log("Sunday".indexOf("Day"))//Sunday內找Day 找不到回傳-1
console.log("Sunday".substr(3, 3)) //第三位 往後抓三位
console.log("Sunday".slice(3, 6))
var x1 = "Sunday,Monday,Tuesday,Wedensday".split(",")
console.log(typeof x1, Array.isArray(x1), x1)
console.log(x1[0], x1[1], x1[2], x1[3], x1[4], x1[5])
console.log(x1[-1], x1[-5], x1[100])
var y1 = "\t\n\r\t abc def ghi \t\n"
console.log(y1)
console.log(y1.trim())