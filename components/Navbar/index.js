/* eslint-disable react/jsx-no-comment-textnodes */
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import NavbarMenu from "../NavbarMenu";

export default function Navbar() {
  const [isShow, setIsShow] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();
    setIsShow(!isShow);
  };

  return (
    <>
      {!isShow && (
        <button className="sm:hidden" type="button" onClick={handleShow}>
          <Bars3Icon className="h-7" />
        </button>
      )}

      <nav
        className={`md:hidden  ${
          isShow ? "fixed" : "hidden"
        } inset-0 w-full h-screen bg-slate-800 p-5 transition duration-200 z-50`}
      >
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleShow}
            className="bg-gray-500 p-1 rounded-md group hover:bg-gray-50 transition duration-150 ease-in"
          >
            <XMarkIcon className="h-7 group-hover:text-blue-500" />
          </button>
        </div>
        <ul className="space-y-3 mt-2">
          <NavbarMenu
            isActive={true}
            title="Beranda"
            subtitle="// mau ke beranda ya"
          />
          <NavbarMenu title="Tentang" subtitle="// hayoo mau kepoin aku ya" />
          <NavbarMenu title="Kontak" subtitle="// kontak aja kalo gitu" />
          <NavbarMenu title="Project" subtitle="// kuy lihat projectnya" />
        </ul>
      </nav>
    </>
  );
}
