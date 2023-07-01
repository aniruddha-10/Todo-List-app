import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { useState,useEffect } from "react";
const Header = () => {
const [mounted,setMounted] = useState(false) 
  const { theme, setTheme } = useTheme();

  useEffect(()=>setMounted(true),[])
  if(!mounted) return null 

  return (
    <header>
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl dark:text-white">Todo List</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} class="text-xl mr-7 transition-all duration-200 hover:scale-125">
            Home
          </Link>
          <Link href={"/"} class="text-xl mr-7 transition-all duration-200 hover:scale-125">
            About Me{" "}
          </Link>
          <Link href={"/todos"} class="text-xl mr-7 transition-all duration-200 hover:scale-125">
            My Todos{" "}
          </Link>
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="px-6 py-2 rounded-2xl bg-black dark:bg-white text-white dark:text-black transition-all duration-500"
          >
            {" "}
            {theme === "light" ? "Dark Mode" : "Light Mode"}{" "}
          </button>
        </nav>
      </div>
    </header>
  );
};
export default Header;
