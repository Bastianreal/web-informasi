export default function Location() {
  return (
    <>
      <div className="lg:flex lg:items-center justify-center p-8 bg-white text-black">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15777.25515252644!2d115.2394837!3d-8.6616779!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24100085bc097:0xaf57c9ffc8b3e841!2sWAROENG TIMOER!5e0!3m2!1sid!2sid!4v1730695152858!5m2!1sid!2sid"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          className="lg:w-[500px] w-[370px] h-[400px]"
        ></iframe>
        <div className="lg:ml-[500px] items-center flex flex-col">
          <div className="text-4xl font-bold mt-5">Lokasi Kami</div>
          <div className="text-2xl lg:w-[600px] text-center">
            Temukan kami di Jl. Dewi Kunti, Sumerta Kelod, Denpasar Selatan, Kota Denpasar, Bali 80239, Lokasi kami dekat dengan renon dan juga kampus warmadewa, cocok bagi anda untuk bersantai dan membuat tugas
          </div>
        </div>
      </div>
    </>
  );
}
