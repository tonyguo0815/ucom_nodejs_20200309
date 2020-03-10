const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            //throw new Error("opps!")
            console.log("no error")
            resolve(1000)
        } catch (e) {
            reject(e)
        }
    }, 2000)
})
console.log("start p1")
p1.then(result => console.log("OK! result=" + result))
    .catch(error => console.error("found exception:" + error))
console.log("stop p1")