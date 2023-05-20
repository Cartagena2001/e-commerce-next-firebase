import React from "react";
import Image from "next/image";
import { logo } from "../../public/assets/images/index";
import { FaWarehouse } from "react-icons/fa";
import { MdOutlineRoomService } from "react-icons/md";
import {
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import NavBarButtom from "./NavBarButtom";

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white sticky top-0 z-20">
      <div className="w-full  h-full border-b-[1px] border-b-white">
        <section className="max-w-container mx-auto h-20 px-4 flex items-center justify-between gap-2">
          <div className="navBarHover">
            <Image className="w-44" alt="logo" src={logo}></Image>
          </div>
          <div className="navBarHover">
            <div className="w-4 grid grid-cols-2 gap-[2px]">
              <FaWarehouse />
            </div>
            <p>Departamento</p>
          </div>
          <div>
            <div className="navBarHover">
              <div className="w-4 grid grid-cols-2 gap-[2px]">
                <MdOutlineRoomService />
              </div>
              <p>Services</p>
            </div>
          </div>
          <div className="h-10 flex flex-1 relative">
            <input
              className="h-full w-full rounded-full px-4 text-black text-base ouline-none border-[1px] border-transparent focus-visible:border-black duration-200"
              type="text"
              placeholder="Buscar productos, marcas y más..."
            />
            <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-black text-white text-xl">
              <AiOutlineSearch />
            </span>
          </div>
          <div className="navBarHover">
            <AiOutlineHeart />
            <div>
              <p className="text-xs">Favoritos</p>
              <h2 className="text-base font-semibold -mt-1">Mis Productos</h2>
            </div>
          </div>
          <div className="navBarHover">
            <AiOutlineUser className="text-lg" />
            <div>
              <p className="text-xs">Login</p>
              <h2 className="text-base font-semibold -mt-1">Cuenta</h2>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-gray-950 duration-300 relative cursor-pointer">
            <AiOutlineShoppingCart className="text-2xl" />
            <p className="text-[10px] -mt-2">$0.00</p>
            <span className="absolute w-4 h-4 bg-white text-black top-0 right-4 rounded-full flex items-center justify-center text-xs">
              0
            </span>
          </div>
        </section>
      </div>
      <NavBarButtom />
    </nav>
  );
};

export default Navbar;
