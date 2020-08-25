import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./Room.css";
import InfoBar from "./infobar/InfoBar";
import Input from "./input/Input";

let socket;
const Room = ({ match }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "localhost:5000";
  const { room, name } = match.params;
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("join", { name, room }, () => {});
    return () => {
      socket.emit("disconnect");
      socket.close();
    };
  }, [ENDPOINT, name, room]);
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };
  console.log(message, messages);
  return (
    <div className="roomContainer">
      <div className="roomInnerContainer">
        <InfoBar room={room} />
        <Input
          message={message}
          setMessage={setMessage}
          setMessages={setMessages}
        />
      </div>
    </div>
  );
};
export default Room;
