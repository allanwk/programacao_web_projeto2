import "./App.css";
import Header from "./components/Header";
import Feed from "./components/Feed";

import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Feed />
    </div>
  );
}

export default App;
