import "../menu.css";

export default function MobileMenu({
  menuOpen,
  setMenuOpen,
  modalOpen,
  setModalOpen,
  query,
  setQuery,
  reloadNews,
}) {
  const menuItems = [
    {
      name: "Brew Brands",
      items: ["Incrypto", "Money Scoop", "Sidekick", "Money with Katie"],
    },
    {
      name: "Topics",
      items: [
        "Education",
        "Finance",
        "Games",
        "International News",
        "Sports",
        "The Metaverse",
        "Tech",
        "Quizzes",
      ],
    },
    {
      name: "Series",
      items: [
        "The Business of Sports",
        "The New Heist",
        "Into the Metaverse",
        "Crypto Crash Course",
        "Black Wall Street, 100 Years Later",
        "Your Pandemic Super Bowl Companion",
        "Returning to the Workplace",
        "Syllabus Series",
      ],
    },
    {
      name: "Podcasts",
      items: [
        "Business Casual",
        "Imposters",
        "The Crazy Ones",
        "The Money with Katie Show",
      ],
    },
    {
      name: "Shop",
      items: ["All Products", "Apparel", "Accessories"],
    },
    {
      name: "Courses",
      items: ["Learning at Morning Brew", "Accelerators", "Sprints"],
    },
  ];

  function toggleModal() {
    setModalOpen(!modalOpen);
  }

  function updateQuery(e) {
    setQuery(e.target.value);
  }

  return (
    <div className={"menu" + (menuOpen ? "" : " offset")}>
      <div className="menu-container">
        <div className="menu-search-container">
          <input
            className="menu-search"
            placeholder="Search stories"
            onChange={updateQuery}
          />
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              reloadNews();
              setMenuOpen(false);
            }}
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
        <ul className="menu-items">
          {menuItems.map((category, index) => (
            <li key={index}>
              <p className="category">{category.name}</p>
              {category.items.map((item, itemIndex) => (
                <p className="item" key={`i:${itemIndex}`}>
                  {item}
                </p>
              ))}
            </li>
          ))}
        </ul>
        <div className="menu-button-container">
          <div
            className="mobile-login-button"
            onClick={() => {
              toggleModal();
              setMenuOpen(false);
            }}
          >
            <svg
              stroke="rgb(255, 255, 255)"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginRight: "0.45rem", fontSize: "1.12rem" }}
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            <p>Login</p>
          </div>
        </div>
      </div>
    </div>
  );
}