import Image from "next/image";

export default function Home() {
  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "الأنشطة", href: "/activites" },
    { name: "الخدمات", href: "/services" },
    { name: "اتصل بنا", href: "/contact" },
  ];
  return (
  <>
    <Image src={'/nav-bg.jpg'} alt="1" width={1000} height={1000} className="w-full "/>

    <h1 className="text-2xl px-2 md:text-5xl text-center py-8 ">النادى الصيفى بمدارس سيتى 2026 اشترك الآن مع أقوى الأنشطة</h1>

    <div className="w-full h-screen"
    // style={{backgroundImage:"url('/nav-bg.jpg')"}}
    >
      {/* <div className="grid grid-cols-4 gap-10 p-5 ">{links.map((link) => (
              <div
                key={link.href}
                href={link.href}
                className="group hover:rounded-4xl relative text-white bg-[url('/nav-bg.jpg')] bg-cover text-3xl border-2 border-yellow-500 aspect-square flex justify-center items-center transition duration-1000 ease-in-out"
              >
                <span className="absolute w-full h-full group-hover:rounded-4xl group-hover:bg-black/80 transition duration-500 ease-in-out"></span>
                <span className="text-black group-hover:text-white z-1 transition duration-500 ease-in-out">{link.name}</span>
              </div>
            ))}</div> */}
            <div className="grid grid-cols-4 gap-10 p-5">
  {links.map((link) => (
    <div
      key={link.href}
      className="group relative overflow-hidden text-white bg-[url('/nav-bg.jpg')] bg-cover bg-center text-3xl border-2 border-yellow-500 aspect-square flex justify-center items-center transition duration-500 ease-in-out rounded-2xl hover:rounded-4xl"
    >
      <span className="absolute inset-0 group-hover:bg-black/80 transition duration-500 ease-in-out"></span>

      <span className="relative z-10 text-black group-hover:text-white transition duration-500 ease-in-out">
        {link.name}
      </span>
    </div>
  ))}
</div>
    </div>
    </>
    
  );
}
