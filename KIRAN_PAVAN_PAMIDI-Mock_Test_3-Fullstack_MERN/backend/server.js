const fs = require("fs");
const path = require("path");
const express = require("express");
const jwt = require("jsonwebtoken");
const productRouter = require("./routes/products");
const logger = require("./middleware/logger");
const auth = require("./middleware/auth");

const app = express();
const PORT = 5000;
const SECRET_KEY = "shopnow_secret";

// Middleware
app.use(express.json());
app.use(logger);

const logDir = path.join(__dirname, "logs");
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);
fs.appendFileSync(path.join(logDir, "app.log"), "App started\n");

app.get("/status", (req, res) => {
  res.json({ status: "running" });
});

app.get("/async-demo", async (req, res) => {
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve("Data fetched (async/await)"), 1000)
  );
  res.json({ message: data });
});

app.use("/products", productRouter);

const staticUser = { email: "admin@test.com", password: "12345" };
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === staticUser.email && password === staticUser.password) {
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
    return res.json({ token });
  }
  res.status(401).json({ error: "Invalid credentials" });
});

app.get("/dashboard", auth, (req, res) => {
  res.json({ message: `Welcome ${req.user.email}` });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
