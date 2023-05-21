import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsStarFill, BsInfoCircle } from "react-icons/bs";
import { ship1Img, ship2Img, ship3Img } from "../../../public/assets/images";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/shopperSlice";
import { Toaster, toast } from 'sonner'

const ProductDetails = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<any>({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setProduct(router.query);
    setLoading(false);
  }, []);

  const _id = Number(product._id);

  return (
    <>
      <Head>
        <title>KartaShop - {product.title}</title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content={product.title} />
        <meta name="author" content="KartaShop" />
      </Head>
      <section className="w-full bg-white px-5">
      <Toaster position="top-center"/>
        <div className="max-w-[80rem] mx-auto grid grid-cols-1 lg:grid-cols-5 justify-items-center content-center py-4">
          <section className="col-span-3 flex items-center justify-center overflow-hidden relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-[80%] transform-origin-top-left cursor-move duration-500"
            />
          </section>
          {/* Product details */}
          <section className="w-full mt-10 col-span-2 flex flex-col gap-2">
            <p className="p-2 text-black text-sm font-semibold border border-gray-400 rounded-md">
              500+ comprado desde ayer
            </p>
            <div className="px-2 py-4 border border-gray-400 rounded-md flex flex-col gap-6">
              <div className="flex justify-between items-center">
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
                <IoMdHeartEmpty className="text-2xl text-red-500" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm under underline-offset-4">
                  {product.brand}
                </p>
                <p className="text-xl font-semibold text-black">
                  {product.title}
                </p>
                <p className="text-base text-zinc-500">{product.description}</p>
                <div className="flex gap-2 items-center text-xs mt-2">
                  <div className="flex gap-1">
                    <BsStarFill className="text-yellow-500" />
                    <BsStarFill className="text-yellow-500" />
                    <BsStarFill className="text-yellow-500" />
                    <BsStarFill className="text-yellow-500" />
                    <BsStarFill className="text-yellow-500" />
                  </div>
                  <p>25</p>
                </div>
                <div className="flex items-end gap-2">
                  <p className="font-semibold  text-2xl text-green-700">
                    Now ${product.price}
                  </p>
                  <p className="text-sm text-zinc-500 line-through flex items-center gap-1">
                    ${product.oldPrice}
                    <span>
                      <BsInfoCircle />
                    </span>
                  </p>
                </div>
              </div>
              {/* Online details */}
              <section className="">
                <p>
                  <span className="font-semibold">$18/m </span>
                  <span className="font-bold">Firma ahora! </span>
                  <span className="underline underline-offset-2">Leer más</span>
                </p>
                <p className="text-sx text-zinc-500 flex items-center gap-1">
                  Precio al comprar en linea
                  <span>
                    <BsInfoCircle />
                  </span>
                </p>
              </section>
              {/* Add to cart */}
              <section className="border-b-[1px] border-b-zinc-300 pb-4">
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        _id: _id,
                        title: product.title,
                        description: product.description,
                        image: product.image,
                        price: product.price,
                        oldPrice: product.oldPrice,
                        quantity: 1,
                        brand: product.brand,
                        category: product.category,
                      })
                    )&& toast.success(`${product.title.substring(0,20)} agregado al carrito`)
                  }
                  className="p-3 bg-black text-white rounded-full hover:bg-white hover:text-black border border-black hover:border-black duration-300"
                >
                  Agregar Carrito
                </button>
              </section>
              {/* Shipping */}
              <section>
                <p className="text-base font-semibold mb-3">
                  ¿Cómo quieres tu artículo?
                </p>
                <div className="w-full grid grid-cols-3 gap-4 text-xs">
                  <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-2">
                    <Image className="w-10" src={ship1Img} alt="ship1" />
                    <p>Envio</p>
                    <p>Mañana</p>
                    <p>Gratis!</p>
                  </div>
                  <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-2">
                    <Image className="w-10" src={ship2Img} alt="ship1" />
                    <p>Recogida</p>
                    <p>Mañana</p>
                    <p>Gratis!</p>
                  </div>
                  <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-2">
                    <Image className="w-10" src={ship3Img} alt="ship1" />
                    <p>Entrega</p>
                    <p>Mañana</p>
                    <p>Gratis!</p>
                  </div>
                </div>
                <p className="font-bold text-xs mt-2">
                  San Salvador, 1120
                  <span className="font-normal underline underline-offset-2 ml-1">
                    Cambiar
                  </span>
                </p>
              </section>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
