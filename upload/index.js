const express = require("express");
const fileUpload = require("express-fileupload");
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'temp'),
    createParentPath: true,
    limit: {fileSize: 1024}
}));

app.get('/', async(req, res)=>{
    res.render('index');
})

app.post('/single', async(req, res, next)=>{
    try {
        const file = req.files.mfile; //mfile is the name of input filed
        console.log(file)
        const newFileName = new Date().getTime().toString() + path.extname(file.name);
        const savePath = path.join(__dirname, 'public', 'uploads', newFileName);
        await file.mv(savePath);
        res.redirect("/");
        
    } catch (error) {
        res.send('Error Uploading file');
        console.log(error)
    }
})


app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});
