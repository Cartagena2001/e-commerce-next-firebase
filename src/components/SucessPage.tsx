import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/shopperSlice";

const SucessPage = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h1 className="text-2xl text-black font-semibold">
        Gracias por comprar en KartaShop.com
      </h1>
      <Link href="/">
        <button
          onClick={() => dispatch(resetCart())}
          className="text-lg text-lightText hover:underline underline-offset-4 decoration-[1px] hover:text-blue duration-300"
        >
          Continuar comprando
        </button>
      </Link>
    </div>
  );
};

export default SucessPage;
