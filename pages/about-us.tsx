import AboutUs from "../public/about.jpg";
import Image from "next/image";
export default function About() {
  return (
    <>
      <div className="items-center justify-center flex-col p-8 lg:w-full bg-white text-black">
        <div className="flex flex-col lg:flex-row items-center justify-center">
        <Image src={AboutUs} width={600} height={600} className="" alt="about-us"></Image>
        <div className="lg:ml-96 lg:mt-0 mt-5">
          <div className="lg:text-5xl text-3xl text-center font-bold">Tentang Kami</div>
          <div className="lg:text-3xl text-xl text-center lg:w-[600px] w-72 lg:mt-10">
            Waroeng Timoer adalah kafe yang menyajikan minuman coffee dan juga minuman non coffee yang dibuat oleh barista terbaik 
            kami menjamin tempat yang nyaman untuk anak muda dan tempat yang nyaman untuk bekerja
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
