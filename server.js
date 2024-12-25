const express = require("express")
const app = express()
const connection = require("./config/db.js")
const ContactRouter = require("./routes/Contact.routes.js")
const cors = require("cors")
require("dotenv").config();

app.use(express.json())
app.use(cors())
app.use("/api",ContactRouter)


// Check if environment variables are loaded
console.log("MONGO URL:", process.env.mongourl);
console.log("PORT:", process.env.PORT);

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connection();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
