import React, { useState } from "react";

function Input(props) {
  // kreiram useState varijablu tekst i funkcija setText pomoću useState
  const [text, setText] = useState("");

  // funkcija handleSubmit se poziva na klik buttona za slanje poruke
  function handleSubmit(e) {
    // ova metoda sprječava defaultno ponašanje forme (slanje forme)
    e.preventDefault(); // kad je nema, ne šalje poruke
    // postavlja se vrijednost state varijable tekst na prazan string
    setText("");
    // poziv funkcije onSendMessage iz propsa koji prima trenutni tekst
    props.onSendMessage(text);
  }

  // funkcija koja se poziva kada korisnik mijenja tekst u input polju
  function handleChange(e) {
    // postavlja se vrijednost state varijable tekst na novu vrijednost
    // koju korisnik unosi
    setText(e.target.value);
  }

  return (
    <div className="Input">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={text}
          type="text"
          placeholder="Unesi svoju poruku"
          autoFocus
        />
        <button>Pošalji</button>
      </form>
    </div>
  );
}

export default Input;
