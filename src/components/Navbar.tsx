import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-slate-800 h-full p-2 min-w-[15rem] rounded shadow">
      <ul className="space-y-2">
        <li>
          <Link className="cursor-pointer" href={"/"}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="cursor-pointer" href={"/predictions"}>
            Previsão
          </Link>
        </li>
      </ul>
    </nav>
  );
};
