const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Server is running...');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

app.post("/api/photographers", async (req, res) => {
    const { category, date, time, location } = req.body;
    try {
        console.log("Request received:", req.body); // Debugging
        const photographers = await Photographer.find({ category, location });
        res.json(photographers);
    } catch (error) {
        console.error("Error fetching photographers:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
