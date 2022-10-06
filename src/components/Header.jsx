/* eslint jsx-a11y/anchor-is-valid: 0 */
/* eslint jsx-a11y/alt-text: 0 */

import phoneImage from "../assets/phone.svg";
import Login from "./Login";
import { useState, useEffect } from "react";

function Header({ loggedIn, setLoggedIn }) {
  const [modalOpen, setModalOpen] = useState(false);

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  function logout() {
    localStorage.removeItem("token");
    setLoggedIn(false);
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
      {modalOpen ? (
        <Login toggleModal={toggleModal} setLoggedIn={setLoggedIn} />
      ) : null}
      <header>
        <nav>
          <a href="#" class="logo-wrapper">
            <img class="logo" src="assets/logo.webp" alt="Morning Brew logo" />
          </a>
          <div class="nav-links large-screen-only">
            <a href="#">Brands</a>
            <a href="#">Podcasts</a>
            <a href="#">Featured</a>
            <a href="#">Shop</a>
            <a href="#">Courses</a>
          </div>
          <div class="subscribe large-screen-only">
            <div class="search-wrapper">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
              </svg>
            </div>
            <svg
              stroke="rgb(28, 127, 242)"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              style={{ "margin-right": "0.45rem", "font-size": "1.12rem" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            <a>Subscribe</a>
            {loggedIn ? (
              <a id="login-link" onClick={logout}>
                Logout
              </a>
            ) : (
              <a id="login-link" onClick={toggleModal}>
                Login
              </a>
            )}
          </div>

          <div class="menu-hamburguer small-screen-only">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
            </svg>
          </div>
        </nav>
        <div class="landing-container">
          <div class="become-smarter">
            <div>
              <h1>Become smarter in just 5 minutes</h1>
              <p>
                Get the daily email that makes reading the news enjoyable. Stay
                informed and entertained, for free.
              </p>
              <div class="email-input-wrapper">
                <input type="email" placeholder="youremail@domain.com" />
                <button>Try It</button>
              </div>
            </div>
          </div>
          <a class="side wrapper-link" href="#">
            <img src="assets/business.webp" alt="an ad to a business course" />
            <h2 class="side-headline">Listen to our Business Casual Podcast</h2>
            <p class="side-description">
              Journalist Nora Ali brings you conversations with creators,
              thinkers, and innovators who can tell you what it all means, and
              why you should care.
            </p>
            <p class="author bold">IN PARTNERSHIP WITH REAL VISION</p>
          </a>
        </div>
        <a class="latest-banner wrapper-link" href="#">
          <img src={phoneImage} alt="A phone" />
          <b>LATEST NEWSLETTER:</b>
          <span>How the climate bill will transform America’s homes...</span>
        </a>
      </header>
    </>
  );
}

export default Header;
