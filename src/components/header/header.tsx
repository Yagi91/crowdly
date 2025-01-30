"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "../searchbar/iconSearchbar";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      role="banner"
      className="px-4 xl:py-4 xl:px-[66px] font-[family-name:var(--font-titillium-web)] h-[150px]"
    >
      {/* Header container with responsive layout */}
      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
        {/* Logo & Search Bar Section */}
        <div className="flex items-center justify-between xl:gap-[21px]">
          <div className="flex items-center gap-4 md:gap-[21px]">
            {/* Website Logo */}
            <Link href="/" aria-label="Home">
              <Image src="/th.svg" alt="Crowdly Logo" width={85} height={85} />
            </Link>

            {/* Desktop Search Bar (hidden on mobile) */}
            <div className="hidden xl:block">
              <SearchBar />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
            aria-controls="nav-menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Search Bar (hidden on desktop) */}
        <div className="mt-4 xl:hidden">
          <SearchBar />
        </div>

        {/* Navigation & CTA Button Section */}
        <div
          id="nav-menu"
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col z-10 mt-4 space-y-4 xl:space-y-0 xl:flex xl:flex-row xl:items-center xl:gap-[32px] bg-white/90 p-2`}
        >
          {/* Navigation Links */}
          <nav
            className="flex flex-col xl:flex-row gap-4 xl:gap-1"
            role="navigation"
          >
            <Link
              href="/"
              className="text-gray-700 hover:text-black xl:after:content-['•'] xl:after:mx-2 xl:last:after:hidden"
            >
              How it works
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-black xl:after:content-['•'] xl:after:mx-2 xl:last:after:hidden"
            >
              About Us
            </Link>
            <Link
              href="/causes"
              className="text-gray-700 hover:text-black xl:after:content-['•'] xl:after:mx-2 xl:last:after:hidden"
            >
              Causes
            </Link>
          </nav>

          {/* Call-to-Action Button */}
          <Button className="w-full xl:w-[266px] px-4 xl:px-[50px] h-[50px] text-[16px] xl:text-[18px] font-semibold leading-[27.38px] rounded-[30px] text-white bg-primary hover:bg-primary/80 flex items-center gap-2">
            Start A Trust Humanity Fund
            <Image
              src="/click.png"
              alt="Click pointer"
              width={24}
              height={24}
            />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
