import Header from "@/components/Header/Header";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <section className="font-inter antialiased">
      <Header />
      <Outlet />
    </section>
  );
};

export default RootLayout;
