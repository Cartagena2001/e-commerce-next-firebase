import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import {Product} from "../../type";
import  Products from "@/components/Products";
import Footer from "@/components/Footer";
import TopFooter from "@/components/TopFooter";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  productData: Product
}

export default function Home({productData}: Props) {
  return (
    <>
      <Head>
        <title>KartaShop E-commerce Next.js + TypeScript + Firebase</title>
        <meta
          name="description"
          content="E-commerce Next.js + TypeScript + Firebase"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="RX63-2cCqP6cWJdDn0IrVkA0QvY9RMFP4y7Yv5ZmlRc" />
      </Head>
      <main className={`bg-lightBlue ${inter.className}`}>
        <div className="max-w-[80%] mx-auto bg-white">
          <Banner />
          <Products productData={productData}/>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const productData = await (
    await fetch("https://kartashop.vercel.app/api/productdata")
  ).json();

  return {
    props: {
      productData,
    },
  }
};
