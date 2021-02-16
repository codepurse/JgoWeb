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
  const [minimize, setMinimize] = useState(false);
  const [readmess, setReadmess] = useState("");
  const [chatcount, setChatcount] = useState("2");

useEffect(() => {
  var myscroll = $(".rowChat");
  myscroll.scrollTop(myscroll.get(0).scrollHeight);
})

useEffect(() => {
 
}, [])


useEffect(() => {
  var x = lenghtmess - readmess;
  if( x < 0) {
    setChatcount("1")
  }else {
    setChatcount(lenghtmess - readmess);
  }
  
}, [lenghtmess])

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
                setLenght(response.channels[channels].length)
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
        
        if (presenceEvent.occupancy > 2) {
          $(".divOnline").css("background-color", "#2E7D32");
        } else {
          $(".divOnline").css("background-color", "#ef5350");
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
                        console.log(minimize)
                        setLenght(response.channels[channels].length)
                        setMessages(response.channels[channels]);
                        if (($(".conChatbox").height() + 400) < 500) {
                          $(".spanCount").show();
                          playSound();
                        }else {
                         
                        }
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
    setMinimize(false);
    setLenght(0);
    $(".spanCount").hide();
     $(".conChatbox").css("height", "500px");
      $(".rowChat").show();
      $(".rowType").show();
      $(".rowChatheader").css("border-radius", "0px");
      $(".rowChatheader").css("border-top-right-radius", "15px");
      $(".rowChatheader").css("border-top-left-radius", "15px");
      $(".minimizeChat").attr("src", "Image/minimize.png");
  }


  function onKeyPress(e) {
    if (e.which === 13) {
      e.preventDefault();
      sendMessage(input);
      setInput("");
    }
  }

  function playSound() {
    var audio = new Audio("Sound/notif.mp3");
    audio.loop = false;
    audio.play();
  }

  function minichat() {
    if (minimize == false) {
      setMinimize(true);
      $(".conChatbox").css("height", "55px");
      $(".rowChat").hide();
      $(".rowType").hide();
      $(".rowChatheader").css("border-radius", "15px");
      $(".minimizeChat").attr("src", "Image/maximize.png");
      setReadmess(lenghtmess);
     
    } else {
      $(".spanCount").hide();
      setMinimize(false);
      setReadmess(0)
      var myscroll = $(".rowChat");
      myscroll.scrollTop(myscroll.get(0).scrollHeight);
      $(".conChatbox").css("height", "500px");
      $(".rowChat").show();
      $(".rowType").show();
      $(".rowChatheader").css("border-radius", "0px");
      $(".rowChatheader").css("border-top-right-radius", "15px");
      $(".rowChatheader").css("border-top-left-radius", "15px");
      $(".minimizeChat").attr("src", "Image/minimize.png");
    }
  }

  return (
    <>
      <Header></Header>
      <Componentdidmount></Componentdidmount>
      <div className="container conChatbox">
        <div className="row rowChatheader">
          <div className="col-lg-6" style = {{position: "relative"}}>
          <span className = "spanCount">{chatcount}</span>
            <div className="form-inline">
              <div className="divOnline"></div>
              <p className="pSupportchat">
                JGO Support 
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-inline divTopchat">
              <img
                src="Image/minimize.png"
                className="img-fluid minimizeChat"
                onClick={minichat}
              ></img>
              <img
                src="Image/close.png"
                className="img-fluid  closeChat"
                onClick={closechat}
              ></img>
            </div>
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
