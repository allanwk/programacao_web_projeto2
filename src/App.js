import "./App.css";
import Header from "./components/Header";
import Feed from "./components/Feed";
import MobileMenu from "./components/MobileMenu";
import LandingContainer from "./components/LandingContainer";

import { useState, useEffect } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(null);
  const [reloadNewsIdx, setReloadNews] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  function reloadNews() {
    setReloadNews(reloadNewsIdx + 1);
  }

  useEffect(() => {
    if (menuOpen || modalOpen) {
      document.querySelector("html").classList.add("lock-scroll");
    } else if (!menuOpen && !modalOpen) {
      document.querySelector("html").classList.remove("lock-scroll");
    }

    if (menuOpen) {
      document.getElementById("menu").classList.remove("hidden");
      setTimeout(
        () => document.getElementById("menu").classList.remove("offset"),
        5
      );
    } else {
      document.getElementById("menu").classList.add("offset");
      setTimeout(
        () => document.getElementById("menu").classList.add("hidden"),
        400
      );
    }
  }, [menuOpen, modalOpen]);

  return (
    <div className="App">
      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        setQuery={setQuery}
        query={query}
        reloadNews={reloadNews}
        loading={loading}
        setLoading={setLoading}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        query={query}
        setQuery={setQuery}
        reloadNews={reloadNews}
      />
      <LandingContainer />
      <Feed
        query={query}
        reloadNewsIdx={reloadNewsIdx}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}

export default App;
