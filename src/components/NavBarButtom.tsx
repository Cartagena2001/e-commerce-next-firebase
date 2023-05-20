import React from "react";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { FaPlaceOfWorship } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";

const NavBarButtom = () => {
  return (
    <div className="max-w-container mx-auto py-2 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <AiOutlinePhone className="w-6" />
          <p className="text-sm font-semibold">¿Cómo quieres tus artículos?</p>
          <FiChevronDown />
          <span className="w-[1px] h-4 bg-white inline-flex ml-2"></span>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineLocationOn />
          <p className="text-sm text-white">San Salvador, 1120</p>
          <FaPlaceOfWorship />
          <p className="text-sm text-white">San Salvador Centro</p>
        </div>
      </div>
      <ul className="flex flex-wrap  gap-6 text-sm font-semibold">
        <li className="bottomNavLi">Ofertas</li>
        <li className="bottomNavLi">Pascua </li>
        <li className="bottomNavLi">Comestibles y artículos esenciales</li>
        <li className="bottomNavLi">Inicio</li>
        <li className="bottomNavLi">Tecnología</li>
        <li className="bottomNavLi">Moda</li>
        <li className="bottomNavLi">Autos</li>
        <li className="bottomNavLi">Más+</li>
      </ul>
    </div>
  );
};

export default NavBarButtom;
