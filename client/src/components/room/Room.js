import React, { useEffect, Fragment } from "react";
import io from "socket.io-client";
const Room = ({ match }) => {
  let socket;
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("join", { id: match.params.id });
  }, []);
  return (
    <Fragment>
      <div>Room</div>
      <p>{match.params.id}</p>
    </Fragment>
  );
};
export default Room;
