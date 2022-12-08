import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex gap-16 items-center bg-slate-800 p-2 shadow rounded">
      <Link
        className="uppercase cursor-pointer text-2xl tracking-widest font-extrabold"
        href={"/"}
      >
        Sport <span className="text-teal-500">Stats</span>
      </Link>
    </header>
  );
};
