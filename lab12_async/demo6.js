try {
    setTimeout(()=>{throw new Error ("HaHa")},2000)
}catch{
    console.log("got an error:"+e)
}
console.log("program terminated")