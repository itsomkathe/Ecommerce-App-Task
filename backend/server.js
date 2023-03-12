require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
const router = require("./routes/routes");
const cors = require("cors");

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;

db.on("error", (err)=>{
    console.error("\x1b[31m\x1b[0m", err);
});

db.once("open", ()=>{
    console.error("\x1b[36m%s\x1b[0m", `Connected to Database`);
});

app.use(express.json());
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000"],
    })
);
app.use("/storage", express.static("storage"));
app.use(router);


app.listen(PORT, ()=>{
    console.error("\x1b[36m%s\x1b[0m", `Server Running on PORT ${PORT} 🚀`)
});
