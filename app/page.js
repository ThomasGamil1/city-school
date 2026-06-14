import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const links = [
    { name: "كرة قدم", href: "/activites"  , img: "/football.jpg"},
    { name: "كرة سله", href: "/activites" , img: "/basket.jpg"},
    { name: "سباحه", href: "/services" , img: "/swimming.jpg"},
    { name: " جمباز", href: "/contact" , img: "/gembas.jpg"},
    { name: " كاراتيه", href: "/contact" , img: "/karate.jpg"},
    { name: " تنس", href: "/contact" , img: "/tennis.jpg"},
    { name: " رياض اطفال", href:"/contact" , img: "/childActive.jpg"},
    { name: "رسم", href: "/contact" , img: "/paint.jpg"},
  ];
  return (
  <>
    <Image src={'/nav-bg.jpg'} alt="1" width={1000} height={1000} className="w-full "/>

    <h1 className="text-2xl px-2 md:text-5xl text-center py-8 ">النادى الصيفى بمدارس سيتى 2026 اشترك الآن مع أقوى الأنشطة</h1>
    
    <div className="grid md:grid-cols-4 grid-cols-2 gap-10 p-5">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group relative overflow-hidden md:text-5xl font-bold border-2 border-yellow-500 aspect-square flex justify-center items-end hover:items-center transition-all duration-500 ease-in-out rounded-2xl hover:rounded-4xl"
          style={{
            backgroundImage: `url(${link.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/80 transition duration-500"></div>

          {/* text */}
          <span className="relative z-10 text-white group-hover:translate-x-1 group-hover:text-gray-300 transition duration-500">
            {link.name}
          </span>
        </Link>
      ))}
    </div>

    <div className="flex justify-center items-center p-2">
        <Link href="/activites">
      <button className="group flex items-center gap-2 px-5 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition">
        See more
        <span className="group-hover:translate-x-1 transition-transform duration-300">
          →
        </span>
      </button>
    </Link>
    </div>


    </>
    
  );
}
