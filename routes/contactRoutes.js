const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST: Get in touch
router.post("/contact", async (req, res) => {
    try {
        const { name, email, mobile, donationType, message } = req.body;

        if (!name || !email || !mobile || !donationType) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newContact = new Contact({
            name,
            email,
            mobile,
            donationType,
            message
        });

        await newContact.save();

        res.status(201).json({ message: "Contact saved successfully ✅" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error ❌" });
    }
});
module.exports = router;
