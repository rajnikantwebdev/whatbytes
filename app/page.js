import Image from "next/image";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductListing from "./components/ProductListing";

export default function Home() {
  return (
    <main className="px-16">
      <ProductListing />
    </main>
  );
}
