require("dotenv").config();
const path = require("path");

const app = require("./src/app");
const connectToDB = require("./src/config/database");

connectToDB();

const PORT = process.env.PORT || 3000;

/* ---------- Serve Frontend Build ---------- */

const frontendPath = path.join(__dirname, "../Frontend/dist");

app.use(require("express").static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

/* ---------- Start Server ---------- */

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});