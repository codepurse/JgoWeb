import React, { useCallback, useEffect, useState } from "react";
import PubNub from "pubnub";
import { PubNubProvider, usePubNub } from "pubnub-react";

const pubnub = new PubNub({
  publishKey: "pub-c-701ebbe8-c393-43d5-a389-9ef5391a8fe9",
  subscribeKey: "sub-c-958ab632-1d8d-11eb-8a07-eaf684f78515",
});

const channels = ["Channel-customersupport-15699"];

const Chat = () => {
  const pubnub = usePubNub();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    pubnub.history(
      {
        channel: channels,
        count: 100, // how many items to fetch
      },
      function (status, response) {
        setMessages(response.messages);
      }
    );

    pubnub.addListener({
      message: (messageEvent) => {
        setMessages([...messages, messageEvent.message]);
      },
    });
    pubnub.subscribe({ channels });
  }, [messages]);

  const sendMessage = useCallback(
    async (message) => {
      await pubnub.publish({
        channel: "Channel-customersupport-15699",
        message,
      });

      setInput("");
    },
    [pubnub, setInput]
  );

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            width: "500px",
            height: "300px",
            border: "1px solid black",
          }}
        >
          <div style={{ backgroundColor: "grey" }}>React Chat Example</div>
          <div
            style={{
              backgroundColor: "white",
              height: "260px",
              overflow: "scroll",
            }}
          >
            {Object.keys(messages).map((keyName, i) => (
              <p className="pErrorSub">
                {messages[keyName].entry.content
                  ? messages[keyName].entry.content
                  : messages[keyName].entry}
              </p>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              height: "40px",
              backgroundColor: "lightgrey",
            }}
          >
            <input
              type="text"
              style={{
                borderRadius: "5px",
                flexGrow: 1,
                fontSize: "18px",
              }}
              placeholder="Type your message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                borderRadius: "5px",
                fontSize: "16px",
              }}
              onClick={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

const App = () => {
  return (
    <PubNubProvider client={pubnub}>
      <Chat />
    </PubNubProvider>
  );
};

export default App;
