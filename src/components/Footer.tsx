import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-slate-800 p-2 shadow rounded">
      <span className="text-xs tracking-tighter font-extralight">
        Made by
        <Link
          className="uppercase ml-1 cursor-pointer hover:underline hover:brightness-150 hover:text-teal-500 hover:font-light"
          href={"https://portfolio-paulodantas-dev.vercel.app"}
          target={"_blank"}
        >
          Paulo Dantas
        </Link>
      </span>
    </footer>
  );
};
