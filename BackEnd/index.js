var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
var url = 'mongodb+srv://Admin:Admin1234@thamon.dwlrt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(url, {useNewUrlParser: true}).then(
    ()=>{
        console.log("[success] task 2 : connected to the database ");
    },
    error=>{
        console.log("[failed] task 2 " + error);
        process.exit();
    }
);


var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("[success] task 1 : listening on port " + port);
});
app.get("/", (req, res) => {
    res.status(200).send("หน้าแรกของ api express");
});

var Users = require("./routers/userRouter");
app.use("/api/users",Users);


app.use((req, res, next) => {
    var err = new Error("ไม่พบ path ที่คุณต้องการ");
    err.status = 404;
    next(err);
});