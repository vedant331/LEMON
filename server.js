require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const reportRoutes = require("./routes/reportRoutes");
const volunteerRoutes = require("./routes/volunteerRoutes");
const contactRoutes = require("./routes/contactRoutes");

app.use("/api", contactRoutes);
app.use("/api", reportRoutes);
app.use("/api", volunteerRoutes);

// MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB connected ✅"))
.catch(err => console.error("MongoDB error ❌", err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
