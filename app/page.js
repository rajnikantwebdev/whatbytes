import Image from "next/image";
import Header from "./components/Header";
import Filters from "./components/Filters";

export default function Home() {
  return (
    <main className="px-8">
      <Header/>
      <Filters />
    </main>
  );
}
