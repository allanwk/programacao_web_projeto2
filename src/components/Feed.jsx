/* eslint jsx-a11y/anchor-is-valid: 0 */
/* eslint jsx-a11y/alt-text: 0 */

import { useEffect } from "react";

export default function Feed() {
  useEffect(() => {
    const url = `https://api.currentsapi.services/v1/latest-news?language=en&apiKey=${process.env.REACT_APP_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <section id="stories">
      <div className="main-stories">
        <div className="main-left">
          <a href="#">
            <img src="assets/fishes.webp" />
            <div className="text-container">
              <h1>Gone smishing: Scams move to the workplace</h1>
              <h2>Ignore the gift card request from your boss (and ours).</h2>
              <p className="author">Sherry Qin</p>
            </div>
          </a>
        </div>

        <div className="main-right">
          <a href="#" className="wrapper-link">
            <div className="text">
              <h1 className="headline">
                Meet the guy uncovering crypto’s biggest thefts
              </h1>
              <h2 className="subtitle">
                Rich Sanders is the closest thing the cryptoworld has to 911.
              </h2>
              <p className="author">Amanda Hoover</p>
            </div>
            <div className="img-container">
              <img src="assets/crypto.webp" />
            </div>
          </a>
          <a href="#" className="wrapper-link">
            <div className="text">
              <h1 className="headline">
                Why rich people are shopping at Walmart
              </h1>
              <h2 className="subtitle">They’re also eating at Applebee’s.</h2>
              <p className="author">ABIGAIL RUBENSTEIN</p>
            </div>
            <div className="img-container">
              <img src="assets/knees.webp" />
            </div>
          </a>
          <a href="#" className="wrapper-link">
            <div className="text">
              <h1 className="headline">
                Haute couture is moving from Paris to the metaverse
              </h1>
              <h2 className="subtitle">Fashion's next frontier is digital.</h2>
              <p className="author">SHERRY QIN</p>
            </div>
            <div className="img-container">
              <img src="assets/haute.gif" />
            </div>
          </a>
        </div>
      </div>

      <div className="latest-stories">
        <h2>Latest Stories</h2>
        <div className="latest-stories-grid">
          <a href="#" className="card wrapper-link">
            <img src="assets/crypto.webp" />
            <p className="tag">International</p>
            <h1 className="headline">
              Meet the guy uncovering crypto’s biggest thefts
            </h1>
            <p className="author light">Amanda Hoover</p>
          </a>

          <a href="#" className="card wrapper-link">
            <img src="assets/knees.webp" />
            <p className="tag">International</p>
            <h1 className="headline">
              Why rich people are shopping at Walmart
            </h1>
            <p className="author light">ABIGAIL RUBENSTEIN</p>
          </a>

          <a href="#" className="card wrapper-link">
            <img src="assets/haute.gif" />
            <p className="tag">International</p>
            <h1 className="headline">
              Haute couture is moving from Paris to the metaverse
            </h1>
            <p className="author light">SHERRY QIN</p>
          </a>

          <a href="#" className="card wrapper-link">
            <img src="assets/crypto.webp" />
            <p className="tag">International</p>
            <h1 className="headline">
              Meet the guy uncovering crypto’s biggest thefts
            </h1>
            <p className="author light">Amanda Hoover</p>
          </a>

          <a href="#" className="card wrapper-link">
            <img src="assets/knees.webp" />
            <p className="tag">International</p>
            <h1 className="headline">
              Why rich people are shopping at Walmart
            </h1>
            <p className="author light">ABIGAIL RUBENSTEIN</p>
          </a>

          <a href="#" className="card wrapper-link">
            <img src="assets/haute.gif" />
            <p className="tag">International</p>
            <h1 className="headline">
              Haute couture is moving from Paris to the metaverse
            </h1>
            <p className="author light">SHERRY QIN</p>
          </a>
        </div>
      </div>

      <div className="more-stories">
        <h2>More Stories</h2>
        <div className="more-stories-grid">
          <a className="sideways-card wrapper-link" href="#">
            <img src="assets/crypto.webp" />
            <div className="side-text">
              <p className="tag">International</p>
              <h1 className="headline">
                Meet the guy uncovering crypto’s biggest thefts
              </h1>
              <p className="author light">Amanda Hoover</p>
            </div>
          </a>

          <a className="sideways-card wrapper-link" href="#">
            <img src="assets/knees.webp" />
            <div className="side-text">
              <p className="tag">International</p>
              <h1 className="headline">
                Meet the guy uncovering crypto’s biggest thefts
              </h1>
              <p className="author light">Amanda Hoover</p>
            </div>
          </a>

          <a className="sideways-card wrapper-link" href="#">
            <img src="assets/haute.gif" />
            <div className="side-text">
              <p className="tag">International</p>
              <h1 className="headline">
                Haute couture is moving from Paris to the metaverse
              </h1>
              <p className="author light">SHERRY QIN</p>
            </div>
          </a>

          <a className="sideways-card wrapper-link" href="#">
            <img src="assets/crypto.webp" />
            <div className="side-text">
              <p className="tag">International</p>
              <h1 className="headline">
                Meet the guy uncovering crypto’s biggest thefts
              </h1>
              <p className="author light">Amanda Hoover</p>
            </div>
          </a>

          <a className="sideways-card wrapper-link" href="#">
            <img src="assets/knees.webp" />
            <div className="side-text">
              <p className="tag">International</p>
              <h1 className="headline">
                Meet the guy uncovering crypto’s biggest thefts
              </h1>
              <p className="author light">Amanda Hoover</p>
            </div>
          </a>

          <a className="sideways-card wrapper-link" href="#">
            <img src="assets/haute.gif" />
            <div className="side-text">
              <p className="tag">International</p>
              <h1 className="headline">
                Haute couture is moving from Paris to the metaverse
              </h1>
              <p className="author light">SHERRY QIN</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
