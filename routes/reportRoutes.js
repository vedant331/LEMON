const express = require("express");
const router = express.Router();
const Report = require("../models/Report");

// POST: submit report
router.post("/report", async (req, res) => {
    try {
        const { name, email, location, issueType, description } = req.body;

        if (!name || !email || !location || !issueType || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newReport = new Report({
            name,
            email,
            location,
            issueType,
            description
        });

        await newReport.save();

        res.status(201).json({ message: "Report submitted successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});


module.exports = router;
