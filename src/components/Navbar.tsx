import Link from "next/link";
import { Footer } from "./Footer";
import { MdDashboard, MdBarChart } from "react-icons/md";
import { useRouter } from "next/router";
import { MenuItems } from "../utils/menuItems";

export const Navbar = () => {
  const router = useRouter();

  const isActive = (url: string) => {
    return router.pathname === url;
  };

  return (
    <nav className="bg-slate-800 h-full p-2 min-w-[12rem] rounded shadow flex flex-col justify-between">
      <div />
      <ul className="space-y-8">
        {MenuItems.map((item) => {
          return (
            <li
              key={item.url}
              className={`${
                isActive(item.url) && "bg-sky-900"
              } p-2 rounded-full shadow-xl cursor-pointer hover:bg-sky-900/50 transition-colors`}
            >
              <Link className="flex items-center gap-2 w-full" href={item.url}>
                {item.icon}
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <Footer />
    </nav>
  );
};
