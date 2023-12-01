import { Button } from "antd";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import { PiLinkFill } from "react-icons/pi";

export default function FooterItem() {
  return (
    <div>
      <div className="md:flex justify-between bg-primary py-12 text-white px-8 ">
        <div className="md:w-96 text-justify">
          <h1 className="text-xl font-semibold">Logo</h1>
          <p>
            Miru is video streaming lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.{" "}
          </p>
          <span className="py-2 text-base">Follow Us</span>
          <div className="flex justify-between mt-2">
            <FaFacebook size={30} color="#FFFFFF" />
            <FaYoutube size={30} color="#FFFFFF" />
            <FaTwitterSquare size={30} color="#FFFFFF" />
            <FaLinkedin size={30} color="#FFFFFF" />
            <FaInstagramSquare size={30} color="#FFFFFF" />
            <PiLinkFill size={30} color="#FFFFFF" />
          </div>
        </div>
        <div className="md:w-52 md:px-8">
          <span className="text-lg font-semibold"> Quick Links</span>
          <div className="flex flex-col">
            <Link href={"/"} className="text-white text-base py-2">
              About Us
            </Link>
            <Link href={"/"} className="text-white text-base">
              Contact Us
            </Link>
            <Link href={"/"} className="text-white text-base py-2">
              Products
            </Link>
            <Link href={"/"} className="text-white text-base">
              Login
            </Link>
            <Link href={"/"} className="text-white text-base py-2">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="w-52">
          <span className="text-lg font-semibold"> Movie Categories</span>
          <div className="flex flex-col">
            <Link href={"/"} className="text-white text-base py-2">
              About Us
            </Link>
            <Link href={"/"} className="text-white text-base">
              Contact Us
            </Link>
            <Link href={"/"} className="text-white text-base py-2">
              Products
            </Link>
            <Link href={"/"} className="text-white text-base">
              Login
            </Link>
            <Link href={"/"} className="text-white text-base py-2">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="bg-white p-4 text-black rounded-xl md:w-96">
          <h4 className="text-xl font-semibold">
            Wants to add your videos on our platform?
          </h4>
          <p className="py-2">
            Create an creator account with us to get start posting on our
            platform with three easy steps.
          </p>
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
              height: "40px",
            }}
          >
            Create an Account
          </Button>
        </div>
      </div>
      <div className="bg-black text-white p-8 flex justify-between items-center text-sm">
        <span>Standups7 - © 2019 All Rights Reserved </span>
        <span>Made with ♥ by EdgeNRoots.com</span>
      </div>
    </div>
  );
}
