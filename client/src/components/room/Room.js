import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./Room.css";
import InfoBar from "./infobar/InfoBar";
import Input from "./input/Input";
import Messages from "./messages/Messages";

let socket;
const Room = ({ match }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const ENDPOINT = "http://localhost:5000";
  const { room, name } = match.params;

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("join", { name, room }, (error) => {
      console.log(error);
    });
    return () => {
      socket.emit("disconnect");
      socket.close();
    };
  }, [ENDPOINT, name, room]);
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };
  return (
    <div className="roomContainer">
      <div className="roomInnerContainer">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};
export default Room;
