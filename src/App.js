import "./App.css";
import Header from "./components/Header";
import Feed from "./components/Feed";

import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(null);
  const [reloadNews, setReloadNews] = useState(0);

  return (
    <div className="App">
      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        setQuery={setQuery}
        query={query}
        setReloadNews={setReloadNews}
        reloadNews={reloadNews}
        loading={loading}
        setLoading={setLoading}
      />
      <Feed
        query={query}
        reloadNews={reloadNews}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}

export default App;
