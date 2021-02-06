import React, { Component, useEffect, useState, useCallback } from "react";
import Header from "../component/header";
import AuthService from "../services/auth.service";
import "../component/map/config";
import Componentdidmount from "../component/componentdidmount";
import Link from "next/link";

import PubNub from "pubnub";
import { PubNubProvider, usePubNub } from "pubnub-react";
import "../component/map/config";

const pubnub = new PubNub({
  publishKey: "pub-c-701ebbe8-c393-43d5-a389-9ef5391a8fe9",
  subscribeKey: "sub-c-958ab632-1d8d-11eb-8a07-eaf684f78515",
});

const Chat = () => {
  const channels = channel_id;
  const pubnub = usePubNub();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState([[]]);
  const [lenghtmess, setLenght] = useState("");

  useEffect(() => {
    pubnub.fetchMessages(
      {
        channels: channels,
      },
      function (status, response) {
        try {
          {
            Object.keys(response.channels).map((keyName, i) => {
              try {
                var x = JSON.parse(JSON.stringify(response.channels[keyName]));
                console.log(x[0].channel);

                setMessages(response.channels[channels]);

                var myscroll = $(".rowChat");
                myscroll.scrollTop(myscroll.get(0).scrollHeight);
              } catch (e) {}
            });
          }
        } catch (e) {}
        var myscroll = $(".rowChat");
        myscroll.scrollTop(myscroll.get(0).scrollHeight);
      }
    );
    var myscroll = $(".rowChat");
    myscroll.scrollTop(myscroll.get(0).scrollHeight);
  }, [channels]);

  useEffect(() => {
    pubnub.addListener({
      presence: function (presenceEvent) {
        console.log("presence event came in: ", presenceEvent);
        if (presenceEvent.occupancy > 2) {
          $(".divOnline").css("background-color","#2E7D32");
        }else {
          $(".divOnline").css("background-color","#ef5350");
        }
      },
      message: (messageEvent) => {
        pubnub.fetchMessages(
          {
            channels: channels,
          },
          function (status, response) {
            try {
              if (response) {
                try {
                  Object.keys(response.channels).map((keyName, i) => {
                    try {
                      var x = JSON.parse(
                        JSON.stringify(response.channels[keyName])
                      );

                      if (x[0].channel == channel_id) {
                        setMessages(response.channels[channels]);
                      }

                      var myscroll = $(".rowChat");
                      myscroll.scrollTop(myscroll.get(0).scrollHeight);
                    } catch (e) {
                      console.log(e);
                    }
                  });
                } catch (e) {}
              } else {
                $(".pInvi").show();
              }
            } catch (e) {}
          }
        );
      },
    });
    var myscroll = $(".rowChat");
    myscroll.scrollTop(myscroll.get(0).scrollHeight);
    pubnub.subscribe({ channels, withPresence: true });

    var myscroll = $(".rowChat");
    myscroll.scrollTop(myscroll.get(0).scrollHeight);
  }, [channels, pubnub]);

  const sendMessage = useCallback(
    async (message) => {
      pubnub.subscribe({ channels });
      if (Object.keys(message).length == 0) {
      } else {
        await pubnub.publish({
          channel: channel_id,
          message: {
            content: message,
            type: 1,
            id: Math.random().toString(16).substr(2),
            client_message: true,
          },
        });

        setInput("");
      }
      var myscroll = $(".rowChat");
      myscroll.scrollTop(myscroll.get(0).scrollHeight);
    },

    [pubnub, setInput]
  );

  function closechat() {
    pubnub.unsubscribeAll();
  }
  function unsub() {
    pubnub.unsubscribe({
      channels: ["Channel-customersupport-28011"],
    });
  }

  function onKeyPress(e) {
    if (e.which === 13) {
      e.preventDefault();
      sendMessage(input);
      setInput("");
    }
  }

  return (
    <>
      <Header></Header>
      <Componentdidmount></Componentdidmount>
      <div className="container conChatbox">
        <div className="row rowChatheader">
          <div className="col-lg-6">
            <div className="form-inline">
              <div className="divOnline"></div>
              <p className="pSupportchat" onClick={unsub}>
                Jgo Support
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="Image/close.png"
              className="img-fluid float-right closeChat"
              style={{ width: "15px", marginRight: "10px", cursor: "pointer" }}
              onClick={closechat}
            ></img>
          </div>
        </div>
        <div className="row rowType">
          <div className="col-lg-12 form-inline" style={{ width: "100%" }}>
            <input
              type="text"
              className="txtType"
              placeholder="Type something.."
              value={input}
              onKeyPress={onKeyPress}
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <img
              src="Image/direct.png"
              className="img-fluid imgSend"
              onClick={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
            ></img>
          </div>
        </div>

        <div className="row rowChat">
          <div className="col-lg-12 align-self-end">
            <div className="row" style={{ margin: "10px 0px" }}>
              <div className="col-lg-12" style={{ width: "100%" }}>
                <p className="pInvi">
                  Please do not provide your personal data. Our agent will
                  contact you soon.
                </p>
                {messages.map((event, i) => {
                  try {
                    {
                      if (event.channel == channel_id) {
                        if (event.message.client_message) {
                          return (
                            <p className="pChatuser">{event.message.content}</p>
                          );
                        } else {
                          return (
                            <p className="pChatright">
                              {event.message.content}
                            </p>
                          );
                        }
                      }
                    }
                  } catch (e) {
                    console.log(e);
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
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
