const expres = require("express")
const app = expres()

 app.get('/',async function (req, res){
    res.send("Estou Ok")
    console.log("Estou Ok")
})



app.listen((3000), () => {
    console.log("Ok")
})