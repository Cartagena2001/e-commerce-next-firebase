import React from "react";
import { Item } from "../../type";
import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { BsStarFill } from "react-icons/bs";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/shopperSlice";
import { Toaster, toast } from 'sonner'

const Products = ({ productData }: any) => {
  const dispatch = useDispatch();
  return (
    <div className="py-6 px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <Toaster position="top-center"/>
      {productData.map((item: Item) => (
        <div
          key={item._id}
          className="border-[1px] border-gray-200  mb-6 group"
        >
          <div className="w-full h-[350px] overflow-hidden p-1">
            <Image
              className="w-full h-full object-contain scale-100  group-hover:scale-105 duration-300"
              width={300}
              height={250}
              src={item.image}
              alt={item.title}
            />
          </div>
          <div className="px-2 py-4 flex flex-col justify-center">
            <div className="flex justify-between py-2">
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
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
                  ) && toast.success(`${item.title.substring(0,20)} agregado al carrito`)
                }
                className="w-24 h-9 bg-black text-white rounded-full flex gap-1 items-center justify-center hover:bg-gray-900 duration-300"
              >
                <span>
                  <GoPlus />
                </span>
                Agregar
              </button>
              <Link
                href={{
                  pathname: `/product/${item._id}`,
                  query: {
                    _id: item._id,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    oldPrice: item.oldPrice,
                    brand: item.brand,
                    category: item.category,
                    image: item.image,
                    isNew: item.isNew,
                  },
                }}
                as={`/product/${item._id}`}
              >
                <button className="w-24 h-9 bg-white border-[1px] border-black text-black rounded-full flex gap-1 items-center justify-center hover:bg-gray-900 hover:text-white duration-300">
                  <span>
                    <GoPlus />
                  </span>
                  Detalle
                </button>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-lg text-green-700 font-semibold">
                Ahora ${item.price}
              </p>
              <p className="text-gray-500 line-through decoration-[1px]">
                ${item.oldPrice}
              </p>
            </div>
            <p className="text-lg font-semibold py-2">
              {item.title.substring(0, 25)}
            </p>
            <p>{item.description.substring(0, 80)}...</p>
            <div className="flex gap-2 items-center text-sm mt-2">
              <div className="flex text-sm gap-1">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <p>25</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
