"use client";
import Image from 'next/image';
import React from 'react';
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Workouts", href: "/workouts" },
    { name: "My Plan", href: "/my-plan" },
  ];

  const links = (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li key={link.href}>
            <Link
              href={link.href}
              className={
                isActive
                  ? "bg-[#C2F10D] text-success-content font-bold"
                  : ""
              }
              aria-current={isActive ? "page" : undefined}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );

    return (
        <div className="navbar bg-base-100 container mx-auto rounded-lg sticky top-0 z-50 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Image src={logo} alt="logo" width={30} height={30} />

        <Link className="btn btn-ghost text-xl font-bold" href="/">
          Fit Log
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end flex gap-2">
        <button className="btn">Plan</button>
        <button className="btn">Save</button>
      </div>
    </div>
    );
};

export default Navbar;