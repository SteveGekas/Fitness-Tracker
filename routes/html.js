const router = require("express").Router();
const path = require("path");

//displays home page route
router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//displays exercsie page route
router.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//displays stats page route
router.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router