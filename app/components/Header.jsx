"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (pathname === "/") {
        const query = new URLSearchParams(searchParams.toString());

        if (searchText.trim() !== "") {
          query.set("search", searchText);
        } else {
          query.delete("search");
        }

        router.push(`/?${query.toString()}`, { scroll: false });
      }
    }, 500); // debounce

    return () => clearTimeout(timeout);
  }, [searchText, pathname]);

  return (
    <nav className="navbar px-8 z-30 fixed top-0 left-0 secondary-bg shadow-sm flex item-center justify-between">
      <div className="">
        <Link href={"/"} className="text-xl">
          WhatBytes
        </Link>
      </div>
      <div>
        <label className="input bg-transparent w-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search-icon lucide-search"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="search"
            className="grow bg-transparent"
            placeholder="Search for products..."
          />
          {/* <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd> */}
        </label>
      </div>
        <div className="bg-black/50 px-6 py-2 rounded-2xl">
          <Link href={"/cart"} className="">
            <div className='flex gap-2 items-center'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-cart-icon lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <span>Cart</span>
            </div>
            {/* <span className="badge badge-sm indicator-item">8</span> */}
          </Link>
        </div>
      
    </nav>
  );
}

export default Header