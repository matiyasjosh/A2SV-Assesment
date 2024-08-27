import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";

const NavBar = () => {
  return (
    <div className="flex my-10 mx-10 justify-between">
      <Image src="/images/a2svLogo.jpeg" alt="a2sv logo" width={120} height={120} className="" />
      
      <div className="navLinks mt-3 flex gap-12 text-gray-700 text-[16px] font-medium">
        <Link href={"/home"} className="">Home</Link>
        <Link href={"/teams"} className="">Teams</Link>
        <Link href={"/success-stories"} className="">Success Stories</Link>
        <Link href={"/about-us"} className="">About Us</Link>
        <Link href={"/blog"} className="">Blogs</Link>
        <Link href={"/"} className="">Get Involved</Link>
      </div>
        <div className="buttons flex mt-1">
            <button className="font-bold mr-7">Login</button>
            <Button text="Donate" round="rounded-lg"/>
        </div>

    </div>
  );
};

export default NavBar;
