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

export default function MobileMenu() {
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
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
