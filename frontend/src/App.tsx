import "./App.css";
import { Link } from "react-scroll";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <div className="App">
          <header className="nav">
            <nav className="nav__container__actions">
              <ul>
                <li>
                  <Link
                    className="page"
                    activeClass="active"
                    smooth
                    spy
                    to="about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="page"
                    activeClass="active"
                    smooth
                    spy
                    to="projects"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    className="home"
                    activeClass="active"
                    smooth
                    spy
                    to="home"
                  >
                    Ming Yang
                  </Link>
                </li>
                <li>
                  <Link
                    className="page"
                    activeClass="active"
                    smooth
                    spy
                    to="testimonials"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    className="page"
                    activeClass="active"
                    smooth
                    spy
                    to="contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <section id="home">
            <HomePage />
          </section>
        <section id="about">ABOUT</section>
        <section id="projects">PROJECTS</section>
        <section id="testimonials">Testimonials</section>
        <section id="contact">CONTACT ME</section>
      </div>
    </>
  );
}

export default App;
