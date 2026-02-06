const express = require("express");
const router = express.Router();
const Volunteer = require("../models/Volunteer");

router.post("/volunteer", async (req, res) => {
    try {
        const { name, email, skills } = req.body;

        if (!name || !email || !skills) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newVolunteer = new Volunteer({ name, email, skills });
        await newVolunteer.save();

        res.status(201).json({ message: "Thank you for joining as a volunteer!" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
