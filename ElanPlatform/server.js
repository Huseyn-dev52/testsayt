const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("ElanPlatform backend işləyir!");
});

app.post("/qeydiyyat", (req, res) => {
    let user = req.body;

    res.json({
        mesaj: "Qeydiyyat uğurludur",
        user: user
    });
});

app.listen(3000, () => {
    console.log("Server 3000 portunda açıldı");
});

setInterval(() => {}, 1000);
