import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import GrainImage from "@/assets/images/grain.jpg";

export default function ContactSection() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="bg-gray-400/10 dark:bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative z-0">
          <div
            className="absolute top-0 left-0 inset-0 -z-50 opacity-5 rounded-3xl"
            style={{
              backgroundImage: `url(${GrainImage})`,
            }}
          ></div>
          <div className="flex md:flex-row flex-col items-center justify-between gap-8 md:gap-16">
            <div className="w-full lg:max-w-lg">
              <h2 className="font-calistoga text-2xl">
                Let's create something amazing togather.
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let's
                connect and discuss how I can help you achive this
                your goals.
              </p>
            </div>
            <div>
              <Button className="font-semibold bg-gray-900 text-white px-6 h-12 rounded-xl dark:hover:text-gray-900">
                Contact Me{" "}
                <span>
                  <ArrowUpRight size={4} />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
