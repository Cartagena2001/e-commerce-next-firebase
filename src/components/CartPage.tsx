import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  emptyCart,
  phoneImg,
  ship1Img,
  ship2Img,
  ship3Img,
  warningImg,
} from "../../public/assets/images";
import { TbReload } from "react-icons/tb";
import { HiMinusSmall } from "react-icons/hi2";
import { MdOutlineAdd } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { StoreProduct } from "../../type";
import FormatePrice from "./FormatePrice";
import {
  minusQuantity,
  plusQuantity,
  resetCart,
  deleteItem,
} from "../../redux/shopperSlice";
import { Toaster, toast } from "sonner";

const CartPage = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state: any) => state.shopper.productData);
  return (
    <>
      <Head>
        <title>KartaShop - Carrito ({productData.length} articulos)</title>
        <meta name="description" content="Carrito KartaShop" />
      </Head>
      <Toaster position="top-center" />
      <section className="w-full py-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-3">
            <h1 className="text-2xl font-bold text-black">
              Carrito <span>({productData.length} articulos)</span>
            </h1>
            {/* carrt details */}
            <section>
              <section className="text-xl font-bold flex items-center gap-2 mb-2 mt-3">
                <Image className="w-10" src={phoneImg} alt="phoneImg" />
                <p>Opciones de recogida y entrega</p>
              </section>
              <section className="w-full grid grid-cols-3 gap-4 text-xs mt-3">
                <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2">
                  <Image className="w-10" src={phoneImg} alt="phoneImg" />
                  <p>Envío</p>
                  <p>Todos los productos disponibles</p>
                </div>
                <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2">
                  <Image className="w-10" src={ship2Img} alt="phoneImg" />
                  <p>Recogida</p>
                  <p>Todos los productos disponibles</p>
                </div>
                <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2">
                  <Image className="w-10" src={ship3Img} alt="phoneImg" />
                  <p>Envío</p>
                  <p>Todos los productos disponibles</p>
                </div>
              </section>
              {/* Cart producto */}
              <section className="w-full p-5 border-[1px] border-zinc-400 rounded-md flex flex-col gap-4 mt-5">
                <p className="font-semibold text-sm text-zinc-500">
                  Vendido y enviado por{" "}
                  <span className="text-black">KartaShop</span>
                </p>
                <div className="flex gap-2">
                  <button className="px-2 py-[1px] text-blue text-sm border-[1px] border-blue rounded-sm">
                    Mejor vendedor
                  </button>
                  <Link href="/">
                    <button className="px-2 py-[1px] text-red-500 text-sm border-[1px] border-red-500 rounded-sm">
                      Retroceder
                    </button>
                  </Link>
                </div>
                {/* products */}
                <div>
                  {productData.map((item: StoreProduct) => (
                    <div
                      key={item._id}
                      className="grid grid-cols-1 lg:grid-cols-4 justify-between gap-4 border-b-[1px] border-b-zinc-200 pb-4"
                    >
                      <div className="lg:col-span-3 flex items-center flex-wrap gap-2">
                        <Image
                          className="w-32"
                          width={500}
                          height={500}
                          src={item.image}
                          alt={item.title}
                        />
                        <div>
                          <h2 className="text-base text-zinc-900">
                            {item.title}
                          </h2>
                          <p className="text-sm text-zinc-500">
                            {item.description}
                          </p>
                          <p className="text-sm text-zinc-500">
                            Precio: ${item.price}
                          </p>
                          <p className="text-sm text-zinc-500 flex items-center gap-1">
                            <span className="bg-blue rounded-full text-white text-xs w-4 h-4 flex items-center justify-center">
                              <TbReload className="rotate-180 />" />
                            </span>
                            30 Días de rembolso
                          </p>
                          {/* Buttons */}
                          <section className="mt-2 flex items-center gap-6">
                            <button
                              onClick={() =>
                                dispatch(deleteItem(item._id)) &&
                                toast.success(
                                  `${item.title.substring(
                                    0,
                                    20
                                  )} Eliminado del carrito`
                                )
                              }
                              className="text-sm underline underline-offset-2 decoration-[1px] text-zinc-600 hover:no-underline hover:text-blue
                            duration-300"
                            >
                              Eliminar
                            </button>
                            <div
                              className="w-28 h-9 border  border-zinc-400 rounded-full text-base font-semibold text-black 
                          flex items-center justify-between px-3"
                            >
                              <button
                                onClick={() =>
                                  dispatch(
                                    minusQuantity({
                                      _id: item._id,
                                      title: item.title,
                                      description: item.description,
                                      image: item.image,
                                      price: item.price,
                                      oldPrice: item.oldPrice,
                                      quantity: 1,
                                      brand: item.brand,
                                      category: item.category,
                                    })
                                  )
                                }
                                className="text-base w-5 h-5 text-zinc-600 hover:bg-[#74767c] 
                            hover:text-white rounded-full flex items-center justify-center cursor-pointer duration-200"
                              >
                                <HiMinusSmall />
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                onClick={() =>
                                  dispatch(
                                    plusQuantity({
                                      _id: item._id,
                                      title: item.title,
                                      description: item.description,
                                      image: item.image,
                                      price: item.price,
                                      oldPrice: item.oldPrice,
                                      quantity: 1,
                                      brand: item.brand,
                                      category: item.category,
                                    })
                                  )
                                }
                                className="text-base w-5 h-5 text-zinc-600 hover:bg-[#74767c] 
                            hover:text-white rounded-full flex items-center justify-center cursor-pointer duration-200"
                              >
                                <MdOutlineAdd />
                              </button>
                            </div>
                          </section>
                        </div>
                      </div>
                      <div className="lg:col-span-1 lg:text-right flex flex-col lg:items-end gap-1">
                        <p className="font-semibold text-xl text-[#2A8703]">
                          <FormatePrice amount={item.price * item.quantity} />
                        </p>
                        <p className="text-sm line-through text-zinc-500">
                          <FormatePrice
                            amount={item.oldPrice * item.quantity}
                          />
                        </p>
                        <div className="flex items-center text-sx gap-2">
                          <p className="bg-green-200 text-[8px] uppercase px-2 py-[1px]">
                            Te ahorras
                          </p>
                          <p className="text-[#2A8703] font-semibold">
                            <FormatePrice
                              amount={
                                item.oldPrice * item.quantity -
                                item.price * item.quantity
                              }
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() =>
                    dispatch(resetCart()) && toast.success(`Carrito limpiado`)
                  }
                  className="w-44 bg-red-500 text-white h-10 rounded-full text-base font-semibold hover:bg-red-800  duration-300"
                >
                  Limpiar Carrito
                </button>
              </section>
            </section>
          </div>
          <div className="lg:col-span-1 p-4 mt-24 h-[500px] border-[1px] border-zinc-400 rounded-md  flex flex-col justify-center gap-4">
            test
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
