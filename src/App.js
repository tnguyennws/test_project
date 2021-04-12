import React, { useState } from "react";
import InputBar from "./InputBar";
import Thread from "./Thread";

const App = () => {
  const [messages, setMessages] = useState([]);

  return (
    <div>
      <InputBar messages={messages} setMessages={setMessages} />
      <Thread messages={messages} />
    </div>
  );
};

export default App;