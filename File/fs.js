console.clear();
let fs = require('fs');

// const user = {
//     name: "Jahid hasan",
//     mob: "+880 1767363427",
//     email: "jahidhsn@gmail.com"
// };


// fs.writeFile("index.json", JSON.stringify(user), (err)=>{
//    if(err){
//        console.log("Upps sorry");
//    }
//    else{
//        console.log("done");
//    }
// });
fs.readFile("index.json", (e, data)=>{
    if(e){
        console.log("ERror");
    }
    else{
        console.log("File type: "+ typeof (data));
    }
})

// fs.appendFile("index.txt", "Hello Mr", (e)=>{
//     if(e){console.log("Error"+e)}
//     else{console.log("Success")}
// })