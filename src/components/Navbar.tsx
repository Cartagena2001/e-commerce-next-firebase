import React, { useEffect, useState } from "react";
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
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useSession, signIn, signOut } from "next-auth/react";
import { addUser, removeUser } from "../../redux/shopperSlice";

const Navbar = () => {
  const { data: session } = useSession();
  const dispath = useDispatch();
  const productData = useSelector((state: any) => state.shopper.productData);
  const userInfo = useSelector((state: any) => state.shopper.userInfo);
  const [totalAmt, setTotalAmt] = useState("");

  useEffect(() => {
    if (session) {
      dispath(
        addUser({
          name: session.user?.name,
          email: session.user?.email,
          image: session.user?.image,
        })
      );
    } else {
      dispath(removeUser());
    }
  }, [session, dispath]);

  useEffect(() => {
    let price = 0;
    productData.map((item: any) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);
  return (
    <nav className="w-full bg-black text-white lg:sticky top-0 z-20">
      <div className="w-full  h-full border-b-[1px] border-b-white">
        <section className="max-w-container mx-auto h-auto py-5 px-4 lg:flex lg:items-center gl:justify-between lg:flex-wrap gap-2">
          <Link href="/">
            <div className="navBarHover">
              <Image className="w-44" alt="logo" src={logo}></Image>
            </div>
          </Link>
          <div className="navBarHover hidden lg:flex">
            <div className="w-4 grid grid-cols-2 gap-[2px]">
              <FaWarehouse />
            </div>
            <p>Departamento</p>
          </div>
          <div>
            <div className="navBarHover hidden lg:flex">
              <div className="w-4 grid grid-cols-2 gap-[2px]">
                <MdOutlineRoomService />
              </div>
              <p>Servicios</p>
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
          <div className="navBarHover hidden lg:flex">
            <AiOutlineHeart />
            <div>
              <p className="text-xs">Favoritos</p>
              <h2 className="text-base font-semibold -mt-1">Mis Productos</h2>
            </div>
          </div>
          {userInfo ? (
            <div onClick={() => signOut()} className="navBarHover mt-5 lg:mt-0">
              <Image
                width={500}
                height={500}
                className="w-10 rounded-full object-cover"
                src={userInfo.image}
                alt="user"
              />
              <div>
                <p className="text-xs">Cerrar sesion</p>
                <h2 className="text-base font-semibold -mt-1">{userInfo.name}</h2>
              </div>
            </div>
          ) : (
            <div onClick={() => signIn()} className="navBarHover mt-5 lg:mt-0">
              <AiOutlineUser className="text-lg" />
              <div>
                <p className="text-xs">Login</p>
                <h2 className="text-base font-semibold -mt-1">Cuenta</h2>
              </div>
            </div>
          )}

          <Link href="/cart">
            <div className="flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-gray-950 duration-300 relative cursor-pointer">
              <AiOutlineShoppingCart className="text-2xl" />
              <p className="text-[10px] -mt-2">${totalAmt}</p>
              <span className="absolute w-4 h-4 bg-white text-black top-0 right-4 rounded-full flex items-center justify-center text-xs">
                {productData.length > 0 ? productData.length : 0}
              </span>
            </div>
          </Link>
        </section>
      </div>
      <div className="hidden md:hidden lg:block">
        <NavBarButtom />
      </div>
    </nav>
  );
};

export default Navbar;
