import express from "express";
const app = express();
const port = 3000;
app.get("/test", (req, res) => {
    res.send("Server is working!");
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
