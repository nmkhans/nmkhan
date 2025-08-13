import MobileMenu from "../MobileMenu/MobileMenu";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Header() {
  return (
    <header className="container mx-auto relative top-3 px-5 lg:px-0">
      <section className="flex justify-between items-center">
        <div className="font-logo-font text-3xl">NM Khan</div>
        <nav className="hidden lg:flex justify-center items-center grow-1">
          <ul className="w-1/3 flex justify-between items-center gap-1 p-0.5 border dark:border-white/15 rounded-full dark:bg-white/10 bg-white backdrop-blur">
            <li className="nav-item">
              <a href="">Home</a>
            </li>
            <li className="nav-item">
              <a href="">Projects</a>
            </li>
            <li className="nav-item">
              <a href="">About</a>
            </li>
            <li className="nav-item dark:bg-white dark:text-gray-900 bg-gray-900 text-white">
              <a href="">Contact</a>
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
