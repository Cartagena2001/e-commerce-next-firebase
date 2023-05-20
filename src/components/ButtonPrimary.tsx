import React from "react";

type Props = {
    btnText: string;
}

const ButtonPrimary = ({btnText}:Props) => {
  return (
    <button className="w-20 h-7 text-sm font-semibold rounded-full bg-black text-white hover:bg-gray-900 duration-300">
      {btnText}
    </button>
  );
};

export default ButtonPrimary;
