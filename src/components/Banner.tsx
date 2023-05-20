import React from "react";
import Slider from "react-slick";
import {
  bannerImg,
  sliderImgFour,
  sliderImgOne,
  sliderImgThree,
  sliderImgTwo,
} from "../../public/assets/images";
import Image from "next/image";
import BannerText from "./BannerText";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import ButtonPrimary from "./ButtonPrimary";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-12 left-6 w-12 h-8 border-[1px] shadow-md border-black text-white bg-black text-xl flex items-center justify-center rounded-md
        hover:bg-white hover:border-transparent hover:text-black cursor-pointer duration-300 z-10"
      onClick={onClick}
    >
      <BsArrowLeft />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-12 right-6 w-12 h-8 border-[1px] shadow-md border-black text-white bg-black text-xl flex items-center justify-center rounded-md
          hover:bg-white hover:border-transparent hover:text-black cursor-pointer duration-300 z-10"
      onClick={onClick}
    >
      <BsArrowRight />
    </div>
  );
}

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-full bg-white px-4 py-6 flex gap-4 border-b-[1px]">
      <div className="w-2/3 rounded-lg h-[410px] shadow-bannerShadow relative">
        <Slider {...settings}>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgOne}
              alt="sliderImgOne"
              priority
            />
            <BannerText
              className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-white"
              title="La moda de primavera en flor"
              description="Nuevas tendencias y estilos para llamar la atención, en cualquier
           momento y con cualquier presupuesto"
              btnText="Comprar ahora!"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgTwo}
              alt="sliderImgOne"
              priority
            />
            <BannerText
              className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-black"
              title="Con un 65% de descuento"
              description="Nuevo ahorro cada semana! Date prisa para obtener precios bajos, bajos"
              btnText="Comprar ahora!"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgFour}
              alt="sliderImgOne"
              priority
            />
            <BannerText
              className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-black"
              title="Con un 65% de descuento"
              description="Nuevo ahorro cada semana! Date prisa para obtener precios bajos, bajos"
              btnText="Comprar ahora!"
            />
          </div>
          <div className="w-full h-[410px] relative">
            <Image
              className="w-full h-full object-cover rounded-lg"
              src={sliderImgThree}
              alt="sliderImgOne"
              priority
            />
            <BannerText
              className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-black"
              title="Ahora hasta $1,300 en un año"
              description="Comience a ahorrar con entrega gratuita Karta Shop con premios y más"
              btnText="Comprar ahora!"
            />
          </div>
        </Slider>
      </div>
      <div className="w-1/3 border-[1px] border-gray-200 rounded-lg shadow-bannerShadow p-4 flex flex-col justify-between">
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-black">Oferta del dia</h2>
            <p className="text-base-zinc-600 underline underline-offset-2">Ver todos</p>
        </div>
        <Image className="h-60 object-cover" src={bannerImg} alt="ofertadia" />
        <ButtonPrimary btnText="Opciones"/>
        <p className="text-lg text-black font-semibold">Desde $199.90</p>
        <p className="font-light">Un linda sala de estar para tu hermoso patio...</p>
      </div>
    </div>
  );
};

export default Banner;
