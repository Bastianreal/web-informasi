import Image from "next/image";
import Menu1 from "../public/placeholdermenu1.png";
import Menu2 from "../public/placeholdermenu2.png";
import Menu3 from "../public/placeholdermenu3.png";
export default function Menu() {
  return (
    <>
      <section id="Menu">
        <div className="flex flex-col justify-center items-center bg-slate-100 text-black text-4xl font-bold py-5">
          Menu Kami
        </div>
        <div className="p-8 items-center justify-center flex bg-slate-100 text-black">
          <div className="lg:flex lg:justify-center lg:items-center lg:space-x-72">
            <div className="items-center justify-center flex-col">
              <Image src={Menu1} alt="menu1"></Image>
              <div className="flex flex-col justify-center items-center">
                <div className="text-3xl font-bold">Coffee</div>
                <div className=" text-xl w-64 text-center">
                  Dibuat oleh barista kami dari biji kopi pilihan kualitas yang
                  terjamin untuk rasa yang nikmat
                </div>
              </div>
            </div>
            <div className="">
              <Image src={Menu2} alt="menu1"></Image>
              <div className="flex flex-col justify-center items-center">
                <div className="text-3xl font-bold">Non-Coffee</div>
                <div className=" text-xl w-64 text-center">
                  Dibuat untuk orang yang tidak menyukai minuman berkopi, tidak
                  kalah nikmat dan menyegarkan
                </div>
              </div>
            </div>
            <div className="">
              <Image src={Menu3} alt="menu1"></Image>
              <div className="flex flex-col justify-center items-center">
                <div className="text-3xl font-bold">Snack</div>
                <div className=" text-xl w-64 text-center">
                  Teman dari minuman yang kami buat yang sudah pasti gurih dan
                  juga manis, tersedia banyak varian
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
