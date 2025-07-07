const fs=require("fs")
// fs.writeFile("message.txt","Hello",(err)=>{
//     if (err) throw err;
//     console.log("Hello")
// })

fs.readFile("./message.txt","utf8",(err,data)=>{
    if (err) throw err
    console.log(data)
})