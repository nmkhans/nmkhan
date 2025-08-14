import { useEffect, useState } from "react";

type scrollType = "down" | "up";

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] =
    useState<scrollType>("down");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScrollDirectionChange = () => {
      const scrollY = window.pageYOffset;

      const direction = scrollY > lastScrollY ? "down" : "up";

      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;

    };

    window.addEventListener("scroll", handleScrollDirectionChange);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScrollDirectionChange
      );
  }, [scrollDirection]);

  return scrollDirection;
}
