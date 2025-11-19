import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function Chat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("message", (msg) => {
      setChat((prev) => [...prev, msg]);
    });
  }, []);

  const sendMessage = () => {
    socket.emit("message", message);
    setMessage("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Live Chat</h2>

      <div style={{
        border: "1px solid gray",
        width: 300,
        height: 200,
        overflowY: "scroll",
        padding: 10
      }}>
        {chat.map((c, i) => <p key={i}>{c}</p>)}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message"
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chat;
