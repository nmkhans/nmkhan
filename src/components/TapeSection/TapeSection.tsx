import StarIconBlack from "@/assets/icons/star-black.svg";
import { useTheme } from "@/context/ThemeContext";

const words = [
  "Mern stack",
  "React developer",
  "Frontend master",
  "Javascript expert",
  "Nodejs crazy",
  "Mern stack",
  "React developer",
  "Frontend master",
  "Javascript expert",
  "Nodejs crazy",
];

const TapeSection = () => {
  const { theme } = useTheme()!;

  return (
    <section className="py-8 lg:py-16 overflow-x-clip">
      <div
        className={`${
          theme === "light" ? "bg-gray-300" : "bg-gradient-to-r"
        } from-emerald-300 to-sky-400 -rotate-3 -mx-1`}
      >
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-4">
            {words.map((word) => (
              <div
                key={word}
                className="inline-flex gap-4 items-center"
              >
                <span
                  className={`${
                    theme === "light"
                      ? "text-gray-900/90"
                      : "text-gray-900"
                  } uppercase font-extrabold`}
                >
                  {word}
                </span>
                <img
                  className="size-6 -rotate-12"
                  src={StarIconBlack}
                  alt="Star Icon"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TapeSection;
