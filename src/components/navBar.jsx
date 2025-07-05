import React, { useEffect, useRef, useState } from "react";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { FaCircleUser } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";

const NavBar = ({ search, setSearch }) => {
  const router = useRouter();
  const ref = useRef(null);
  const location = usePathname();

  useEffect(() => {
    if (location === "/search") ref.current.focus();
  }, []);
  return (
    <div className="bg-white flex items-center justify-between gap-4 pe-2">
      <div className="flex gap-2 items-center ps-5 py-3">
        <span
          className="text-gray-400 cursor-pointer"
          onClick={() => router.push("/")}
        >
          Home
        </span>
        <span>/</span>
        <span className="font-semibold cursor-pointer">
          {location === "/search" ? "Search" : "Dashboard"}
        </span>
      </div>
      <div
        className="w-[500px]  bg-slate-50 flex items-center ps-2 py-1 rounded"
        onClick={() => router.push("/search")}
      >
        <IoSearchOutline />
        <input
          ref={ref}
          placeholder="Search anything..."
          value={search && search}
          onChange={(e) => (setSearch ? setSearch(e.target.value) : "")}
          type="search"
          className="outline-none ps-1 w-full bg-transparent"
        />
      </div>
      <div className="w-[150px] md:block hidden">
        <ul className="flex gap-7 [&>li]:cursor-pointer">
          <li>
            <HiOutlineBellAlert />
          </li>
          <li>
            <FaCircleUser />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
