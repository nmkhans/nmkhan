import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { useLocation } from "react-router";

export default function MobileMenu() {
  const location = useLocation();
  const active =
    "dark:bg-white dark:text-gray-900 bg-gray-900 text-white";

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            <ul className="flex flex-col justify-between items-center gap-1 p-0.5 border dark:border-white/15 rounded-md dark:bg-white/10 bg-white backdrop-blur mt-10 py-2">
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
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
