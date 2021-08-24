import React from "react";

//CSS
import "../style.css";
import logo from "../img/ard1.png";
import styles from "./navBar.module.css";
function Nav() {
  const [showSidebar, hideSidebar] = React.useState(false);
  const [showLogin, hideLogin] = React.useState(false);
  const [showSignup, hideSignup] = React.useState(false);
  const onlyLoginPage=()=>{
    if(hideLogin!=true){
      return hideLogin(!showLogin), hideSignup(false);
  }}
  const onlySignupPage = () => {
    if (hideSignup != true) {
      return hideSignup(!showSignup), hideLogin(false);
    }
  };
  return (
    <section className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <button
            className="sidebar-toggle"
            id="logoBtn"
            onClick={() => hideSidebar(!showSidebar)}
          >
            <img className="logo" id="logo" src={logo} alt="logo" />
          </button>
        </div>
        <ul className="links">
          <li>
            <a href="anime.html">Anime</a>
          </li>
          <li>
            <a href="manga.html">Manga</a>
          </li>
          <li>
            <a href="music.html">Music</a>
          </li>
          <li>
            <a href="movies.html">Movies</a>
          </li>
          <li>
            <a href="games.html">Games</a>
          </li>
        </ul>

        <ul className="social-icons">
          <li>
            <a href="https://www.facebook.com">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <button
              className="loginPageBtn"
              style={{ border: 0, background: "none" }}
              onClick={() => onlyLoginPage()}
            >
              <a>
                <i className="fa fa-user" aria-hidden="true"></i>
              </a>
            </button>
          </li>
          <li>
            <button
              className="signUpPageBtn"
              style={{ border: 0, background: "none" }}
              onClick={() =>onlySignupPage()}
            >
              <a>
                <i className="fa fa-user-plus" aria-hidden="true"></i>
              </a>
            </button>
          </li>
        </ul>
      </div>

      {/* ----------------SideBar---------------- */}
      {showSidebar && (
        <aside className="sidebar">
          <div className="sidebar-header">
            <button
              className="close-btn"
              onClick={() => hideSidebar(!showSidebar)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div id="box">
            <button className="icon" id="a">
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <button className="icon" id="b">
              <i className="fa fa-tag" aria-hidden="true"></i>
            </button>
            <button className="icon" id="c">
              <i className="fa fa-sad-cry" aria-hidden="true"></i>
            </button>
            <button className="icon" id="d">
              <i className="fa fa-save" aria-hidden="true"></i>
            </button>
            <button className="icon" id="e">
              <i className="fa fa-rainbow" aria-hidden="true"></i>
            </button>
            <button className="icon" id="f">
              <i className="fa fa-wallet" aria-hidden="true"></i>
            </button>
            <button className="icon" id="g">
              <i className="fa fa-tape" aria-hidden="true"></i>
            </button>
            <button className="icon" id="h">
              <i className="fa fa-tablets" aria-hidden="true"></i>
            </button>
          </div>
          {/*                                                                 */}
          <ul className={styles.links_sidebar}>
            <li>
              <a href="anime.html">Anime</a>
            </li>
            <li>
              <a href="manga.html">Manga</a>
            </li>
            <li>
              <a href="music.html">Music</a>
            </li>
            <li>
              <a href="movies.html">Movies</a>
            </li>
            <li>
              <a href="games.html">Games</a>
            </li>
          </ul>

          <ul className={styles.social_icons_sidebar}>
            <li>
              <button>
                <a href="https://www.facebook.com">
                  <i className="fab fa-facebook"></i>
                </a>
              </button>
            </li>
            <li>
              <button>
                <a href="https://www.twitter.com">
                  <i className="fab fa-twitter"></i>
                </a>
              </button>
            </li>
            <li>
              <button>
                <a href="https://www.instagram.com">
                  <i className="fab fa-instagram"></i>
                </a>
              </button>
            </li>
            <li>
              <button
                className={styles.loginPageBtn}
                onClick={() => onlyLoginPage()}
              >
                <a>
                  <i className="fa fa-user" aria-hidden="true"></i>
                </a>
              </button>
            </li>
            <li>
              <button
                className={styles.signUpPageBtn}
                onClick={() => onlySignupPage()}
              >
                <a>
                  <i className="fa fa-user-plus" aria-hidden="true"></i>
                </a>
              </button>
            </li>
          </ul>
          {/*                                                                      */}
        </aside>
      )}
      {/* ------------------Forms-------------------- */}
      {showLogin && (
        <div className="formContain">
          <br />
          <br />
          <br />
          <form className="loginForm" action="">
            <br />
            <label for="userName">Username</label>
            <br />
            <input type="text" />
            <br />
            <label for="password">password</label>
            <br />
            <input type="password" />
            <br />
            <button class="login">Login</button>
          </form>
        </div>
      )}
      {showSignup && (
        <div class="signUpFormContain">
          <br />
          <br />
          <br />
          <form class="signUpForm" action="">
            <label for="userName">Username</label>
            <br />
            <input type="text" />
            <br />
            <label for="password">Password</label>
            <br />
            <input type="password" />
            <br />
            <label for="password">Confirm Password</label>
            <br />
            <input type="password" />
            <br />
            <br />
            <button class="submitSignUp">Signup</button>
            <br />
          </form>
        </div>
      )}
    </section>
  );
}

// ReactDom.render(<Nav />, document.getElementById("root"));
export default Nav;
