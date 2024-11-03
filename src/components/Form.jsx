import { useState } from "react";
import "../style.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassowrd] = useState("");

  const [errName, setErrName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const [errConfirmPassword, setErrConfirmPassowrd] = useState(false);

  const [nameBorder, setNameBorder] = useState("");
  const [emailBorder, setEmailBorder] = useState("");
  const [passwordBorder, setPasswordBorder] = useState("");
  const [confirmPasswordBorder, setConfirmPassowrdBorder] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    if (name.length >= 8) {
      setNameBorder("green");
      setErrName(false);
    } else {
      setNameBorder("red");
      setErrName(true);
    }

    if (email.includes("@gmail")) {
      setEmailBorder("green");
      setErrEmail(false);
    } else {
      setEmailBorder("red");
      setErrEmail(true);
    }

    if (password.length >= 6) {
      setPasswordBorder("green");
      setErrPassword(false);
    } else {
      setPasswordBorder("red");
      setErrPassword(true);
    }

    if (confirmPassword == password && password !== "") {
      setConfirmPassowrdBorder("green");
      setErrConfirmPassowrd(false);
    } else {
      setConfirmPassowrdBorder("red");
      setErrConfirmPassowrd(true);
    }
  };

  return (
    <div className="container">
      <div className="left">
        <img src="../img/bg.jpg" alt="background" />
      </div>
      <form>
        <input
          style={{ borderBottom: `1.5px solid ${nameBorder}` }}
          type="text"
          value={name}
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        {errName && (
          <span className="error">Must contain at least 5 chars</span>
        )}
        <input
          style={{ borderBottom: `1.5px solid ${emailBorder}` }}
          type="email"
          value={email}
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        {errEmail && <span className="error">Must contain @gmail</span>}
        <input
          style={{ borderBottom: `1.5px solid ${passwordBorder}` }}
          type="password"
          value={password}
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        {errPassword && (
          <span className="error">Must contain at least 6 chars</span>
        )}
        <input
          style={{ borderBottom: `1.5px solid ${confirmPasswordBorder}` }}
          type="password"
          value={confirmPassword}
          placeholder="Confirm password..."
          onChange={(e) => setConfirmPassowrd(e.target.value)}
        />{" "}
        <br />
        {errConfirmPassword && (
          <span className="error">Your passwords must be the same</span>
        )}
        <button onClick={handleForm}>Validate</button>
      </form>
    </div>
  );
};

export default Form;
