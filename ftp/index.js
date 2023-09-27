const express = require("express");
const serveIndex = require("serve-index");

const app = express();
app.use(
  "/ftp",
  express.static("public/ftp"),
  serveIndex("public/ftp", { icons: true })
);

app.use('/' , (req, res)=>{
    res.send("hahahaha")
})

app.listen(3000, () => {
  console.log("running on http://localhost:3000");
});
