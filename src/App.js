import "./App.css";
import Header from "./components/Header";
import Feed from "./components/Feed";
import MobileMenu from "./components/MobileMenu";
import LandingContainer from "./components/LandingContainer";

import { useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(null);
  const [reloadNews, setReloadNews] = useState(0);
  const [menuOpen, setMenuOpen] = useState(true);

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
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <LandingContainer />
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
