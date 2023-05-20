import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white pt-4 pb-6">
      <div className="max-w-[80rem] mx-auto">
        <ul className="w-full flex flex-wrap gap-1 justify-center text-sm text-zinc-200">
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Todos los departamentos
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Direccion de tienda
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Carreras
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Nuestra compañía
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Vender en KartaShop.com
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Ayuda
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Programador de vacunas COVID-19
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Retiros de productos
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Accesibilidad
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Programa de exención de impuestos
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Obtenga la aplicación KartaShop
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Regístrese para recibir correo electrónico
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Ficha de datos de seguridad
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Condiciones de uso
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Privacidad y seguridad
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Derechos de privacidad de CA
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Ley de la cadena de suministro de San Salvador
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Sus opciones de privacidad
          </li>
          <li className="hover:text-white duration-200 ml-2 cursor-pointer">
            Solicitar mi información personal
          </li>
        </ul>
        <p className="text-sm text-zinc-300 text-center mt-4">©{new Date().getFullYear()} KartaShop.com Derechos registrados</p>
      </div>
    </div>
  );
};

export default Footer;
