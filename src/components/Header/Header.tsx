import { useLocation } from "react-router";
import MobileMenu from "../MobileMenu/MobileMenu";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import useScrollDirection from "./../../hooks/useScrollDirection";

export default function Header() {
  const scrollDirection = useScrollDirection();
  const location = useLocation();
  const active =
    "dark:bg-white dark:text-gray-900 bg-gray-900 text-white";

  return (
    <header
      className={`container mx-auto fixed left-0 right-0 ${
        scrollDirection === "down" ? "-top-24" : "top-0 lg:top-3"
      } px-5 py-3 lg:py-1 lg:px-0 backdrop-blur lg:backdrop-blur-none z-50 transition-all duration-500`}
    >
      <section className="flex justify-between items-center">
        <div className="font-logo-font text-3xl backdrop-blur p-1">
          NM Khan
        </div>
        <nav className="hidden lg:flex justify-center items-center grow-1">
          <ul className="w-2/5 flex justify-between items-center gap-1 p-2 border dark:border-white/15 rounded-full dark:bg-white/10 bg-white backdrop-blur">
            <li
              className={`nav-item ${
                location.hash === "#home" ||
                (location.pathname === "/" && !location.hash)
                  ? active
                  : ""
              }`}
            >
              <a className="inline-block" href="#home">
                Home
              </a>
            </li>
            <li
              className={`nav-item ${
                location.hash === "#about" ? active : ""
              }`}
            >
              <a className="inline-block" href="#about">
                About
              </a>
            </li>
            <li
              className={`nav-item ${
                location.hash === "#skills" ? active : ""
              }`}
            >
              <a className="inline-block" href="#skills">
                Skills
              </a>
            </li>
            <li
              className={`nav-item ${
                location.hash === "#projects" ? active : ""
              }`}
            >
              <a className="inline-block" href="#projects">
                Projects
              </a>
            </li>
            <li
              className={`nav-item ${
                location.hash === "#contact" ? active : ""
              }`}
            >
              <a className="inline-block" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <div className="inline-block lg:hidden">
            <MobileMenu />
          </div>
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
}
