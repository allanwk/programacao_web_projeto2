import { useState } from "react";

export default function Login({ toggleModal, setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://reqres.in/api/login", true);

    //Send the proper header information along with the request
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = () => {
      // Call a function when the state changes.
      if (xhr.readyState === XMLHttpRequest.DONE) {
        let response = JSON.parse(xhr.responseText);
        console.log(response);
        if ("token" in response) {
          localStorage.setItem("token", response.token);
          setMessage("Logged in successfully!");
          setTimeout(() => {
            toggleModal();
            setLoggedIn(true);
          }, 500);
        } else {
          setMessage("Invalid credentials!");
        }
      }
    };
    xhr.send(JSON.stringify({ email, password }));
  }

  return (
    <div class="modal-container">
      <form onSubmit={handleSubmit} class="login">
        <h1 id="login-title">Welcome!</h1>
        <label for="login-email">E-mail</label>
        <input
          required
          minlength="3"
          id="login-email"
          onChange={handleEmail}
          type="email"
          placeholder="someone@somewhere.com"
        />
        <label for="login-password">Password</label>
        <input
          required
          minlength="3"
          id="login-password"
          onChange={handlePassword}
          type="password"
          placeholder="your password"
        />
        {message ? <h3 id="login-message">{message}</h3> : null}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
