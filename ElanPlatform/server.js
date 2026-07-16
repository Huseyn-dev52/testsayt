const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
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
