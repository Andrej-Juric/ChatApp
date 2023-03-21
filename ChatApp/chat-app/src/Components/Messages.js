import React from "react";

function Messages(props) {
  // props koje dobiva ova komponenta
  const { messages, currentMember } = props;

  // funkcija koja renderira pojedinačnu poruku
  function renderMessage(message) {
    // izvlačenje member i teksta iz poruke
    const { member, text } = message;
    // provjera je li poruka od trenutnog korisnika
    const messageFromMe = member.id === currentMember.id;
    // postavljanje klase ovisno tko je poslao poruku pomoću ternarnog operatora
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";

    // renderiranje poruke
    // kroz props metodu, prima se member objekt koji sadrži info ime korisnika
    // i boja avatara i tekst poruke
    return (
      <li className={className} key={message.time}>
        <span
          className="avatar"
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className="Message-content">
          <div className="username" style={{ color: member.clientData.color }}>
            {member.clientData.username}
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }

  // renderiranje cijele liste poruka
  return (
    <ul className="Messages-list">{messages.map((m) => renderMessage(m))}</ul>
  );
}

export default Messages;

/*
Komponenta koja prikazuje listu poruka. Funkcija "Messages" prima propse koji sadrže
"messages" i "currentMember" objekte.

Unutar funkcije "Messages" imam i funkciju "renderMessage" koja zaprima "message" kao argument
i koristi ga za generiranje jsx koda koji prikazuje poruku.

Klasu postavljam ovisno o tome tko je poslao poruku pomoću ternarnog operatora, a podaci o 
članu koristim za prikaz imena i boje avatara.

Na kraju u return, koristim map funkciju na "messages" propu kako bi se prikazale sve poruke
pomoću funkcije "renderMessage"

*/
