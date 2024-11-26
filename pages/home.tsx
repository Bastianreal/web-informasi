import Image from "next/image";
import Background from "../public/background.png";
import Link from "next/link";
export default function About() {
  return (
    <>
      <div className=" bg-background bg-no-repeat h-[868px] p-8" id="Home">
        <div className="lg:text-[110px] text-[90px] font-bold w-10">
          Nongki Murah?
        </div>
        <div className="lg:text-[78px] text-[80px] font-light w-10">
          Waroeng Timoer solusinya
        </div>
        <div className="lg:space-x-10 space-y-5">
          <Link href="#AboutUs">
            <button className="w-[209px] bg-white text-black rounded-xl text-2xl h-[73px] hover:bg-black hover:text-white duration-500">
              Tentang Kami
            </button>
          </Link>
          <Link href={"#Menu"}>
            <button className="w-[209px] border-4 text-white rounded-xl text-2xl h-[73px] hover:bg-white hover:text-black duration-500">
              Menu Kami
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
