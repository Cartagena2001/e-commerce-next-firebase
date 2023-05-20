import React from "react";

interface Props {
    title: string;
    description: string;
    btnText: string;
    className: string;
}

const BannerText = ({title, description, btnText, className}:Props) => {
  return (
    <div className={className}>
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="text-sm leading-5">
        {description}
      </p>
      <button className="bg-black text-sm text-white font-semibold rounded-full w-full h-8 border-[1px] border-white">
        {btnText}
      </button>
    </div>
  );
};

export default BannerText;
