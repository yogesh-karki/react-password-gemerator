import React, { useState } from "react";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "./Character";

import { toast, ToastContainer } from "react-toastify";
// import "react-toastifDLS 23 Hacky/dist/ReactToastify.css";

const App = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(26);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleGeneratePassword = () => {
    if (
      !includeUpperCase &&
      !includeLowerCase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      console.log("tryagain");
    } else {
      let characterList = "";

      if (includeNumbers) {
        characterList = characterList + numbers;
      }
      if (includeUpperCase) {
        characterList = characterList + upperCaseLetters;
      }
      if (includeLowerCase) {
        characterList = characterList + lowerCaseLetters;
      }
      if (includeSymbols) {
        characterList = characterList + specialCharacters;
      }

      console.log(characterList);

      setPassword(createPassword(characterList));
    }
  };

  const createPassword = (characterList) => {
    let password = "";

    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }

    return password;
  };

  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h2 className="generator_header">Password Generator</h2>

          <div className="generator__password">
            <h3>{password} </h3>
            <button className="copy__btn">
              <i className="far fa-clipboard"></i>
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="password-strength">Password length</label>
            <input
              className="pw"
              defaultValue={passwordLength}
              type="number"
              id="password-stregth"
              name="password-strength"
              max="26"
              min="8"
              onChange={(e) => setPasswordLength(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="uppercase-letters">Add Uppercase Letters</label>
            <input
              checked={includeUpperCase}
              type="checkbox"
              id="uppercase-letters"
              name="uppercase-letters"
              onChange={(e) => setIncludeUpperCase(e.target.checked)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lowercase-letters">Add Lowercase Letters</label>
            <input
              checked={includeLowerCase}
              type="checkbox"
              id="lowercase-letters"
              name="lowercase-letters"
              onChange={(e) => setIncludeLowerCase(e.target.checked)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-numbers">Include Numbers</label>
            <input
              checked={includeNumbers}
              type="checkbox"
              id="include-numbers"
              name="include-numbers"
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-symbols">Include Symbols</label>
            <input
              checked={includeSymbols}
              type="checkbox"
              id="include-symbols"
              name="include-symbols"
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
          </div>
          <button className="generator__btn" onClick={handleGeneratePassword}>
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
