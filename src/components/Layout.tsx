import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navbar } from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen p-2 bg-slate-900 text-slate-100 flex flex-col gap-2">
      <Header />
      <div className="flex-grow flex ">
        <Navbar />
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
