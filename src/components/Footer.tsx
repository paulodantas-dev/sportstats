import Link from "next/link";

//https://portfolio-paulodantas-dev.vercel.app

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-slate-700 p-2 shadow rounded">
      <span className="flex items-center justify-center gap-1 text-xs font-mono tracking-tighter">
        Made by
        <Link
          href="https://portfolio-paulodantas-dev.vercel.app"
          className="text-xs font-light tracking-normal cursor-pointer hover:underline"
          target={"_blank"}
        >
          @Paulo Dantas
        </Link>
      </span>
    </footer>
  );
};
