"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export const Header = () => {
  const { setTheme, theme } = useTheme();

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl">Inventory</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-700 dark:text-gray-200">
          <Link href="#features" className="hover:text-blue-600">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-blue-600">
            Pricing
          </Link>
          <Link href="#about" className="hover:text-blue-600">
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex gap-3 items-center">
          <Button variant="outline" className="hidden md:flex">
            Login
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </div>
      </div>
    </header>
  );
};
