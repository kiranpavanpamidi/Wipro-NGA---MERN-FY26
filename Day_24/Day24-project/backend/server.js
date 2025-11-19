const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
app.use(cors());
app.use(express.json());

// ---------- 1. FILE UPLOAD USING MULTER ----------

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); 
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== "application/pdf") {
    cb(new Error("Only PDF files allowed"), false);
  } else {
    cb(null, true);
  }
};

const upload = multer({ storage, fileFilter });

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully: " + req.file.filename);
});

// ---------- 2. SERVE STATIC FILES ----------

app.use("/materials", express.static("uploads"));

// ---------- 3. SOCKET.IO REAL-TIME CHAT ----------

const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("message", (msg) => {
    io.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// ---------- START SERVER ----------

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
