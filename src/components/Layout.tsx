import { Header } from "./Header";
import { Navbar } from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen bg-slate-900 text-slate-100 overflow-hidden">
      <div className="w-full h-full max-w-7xl p-2 flex flex-col gap-2 mx-auto">
        <Header />
        <div className="flex-grow flex gap-2 overflow-auto">
          <Navbar />
          <main className="flex-grow">{children}</main>
        </div>
      </div>
    </div>
  );
}
