import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));


app.get('/',(req,res)=>{
    res.sendFile("C:\\Users\\haniyeh.zahraee\\Documents\\haniyeh-projects\\login\\login.html");
});

app.post('/submit',(req,res)=>{
    console.log(req.body);
    if (req.body.password == "haniyeh"){
        res.sendFile("C:\\Users\\haniyeh.zahraee\\Documents\\haniyeh-projects\\login\\home.html");
    }
    else{
        res.redirect("/");
    }

});

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})