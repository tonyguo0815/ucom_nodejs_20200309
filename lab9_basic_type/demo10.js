var o1 = {}
var o2 = {
    name: "NodeJS",
    duration: 14,
    period: ["Monday", "Tuesday"]
}
var o3 = {}

console.log(typeof o1, typeof o2)
console.log(o1, o2)
console.log(o2.name,o3.name)
o3["name"] = "POOP"
o3["duration"] = 35
o3["period"] = ["Saturday"]
console.log(o2.name,o3.name)
delete o3.name
console.log(o2.name,o3.name)
delete o2.name
console.log(o2.name,o3.name)