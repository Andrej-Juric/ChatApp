import React, { Component } from "react";
import { randomColor, randomName } from "./Components/Utils";
import Messages from "./Components/Messages";
import Input from "./Components/Input";
import "./Components/App.css";

class App extends Component {
  state = {
    messages: [],
    member: {
      username: randomName(),
      color: randomColor(),
    },
  };

  // inicijalizacija Scaledrone klijenta
  drone = new window.Scaledrone("KCc3Zlz5JzOk4Nm3", {
    data: this.state.member,
  });

  // zapamtiti ID trenutnog korisnika -
  // ako se veza ostvari -> this.drone.clientID spremamo u this.currentMemberID
  // this.drone je objekt iz biblioteke Scaledronea - dvosmjerna komunikacija klijet/server
  componentDidMount() {
    this.drone.on("open", (error) => {
      if (!error) {
        this.currentMemberId = this.drone.clientId;
      }

      // ažuriranje ID, identifikacija korisnika u chat app
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });

    // registracija korisnika na odabrani chat room
    const room = this.drone.subscribe("observable-room");
    room.on("data", (data, member) => {
      //console.log(message);

      // spremanje poruke u state aplikacije te prikaz
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages });
    });
  }

  // zadnji korak; slanje poruke od strane trenutnog korisnika
  onSendMessage = (message) => {
    this.drone.publish({ room: "observable-room", message });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>ChatApp</h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
          key={this.state.member.id}
        />
        <Input onSendMessage={this.onSendMessage} />
      </div>
    );
  }
}

export default App;
