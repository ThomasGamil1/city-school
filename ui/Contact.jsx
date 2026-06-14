import next from "next";
import Link from "next/link";
import Image from "next/image";




export default function Contact (){
    return(
    <main className="p-8 flex items-center justify-around mt-3 bg-gray-800">

      <div className="w-full max-w-xl bg-gray-200 shadow-lg rounded-2xl p-8">
        {/* <h1 className="text-3xl font-bold mb-2"></h1> */}
        <p className="text-gray-500 mb-6">
          اكتب رسالتك وسنرد عليك في أقرب وقت
        </p>

        <form action="/api/contact" method="POST" className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="الاسم"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="البريد الإلكتروني"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="message"
            placeholder="رسالتك"
            rows="5"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            إرسال الرسالة
          </button>
        </form>
      </div>

       <div className="w-full max-w-xl text-white bg-gray-900 shadow-lg rounded-2xl p-8">

        <h1 className="text-3xl font-bold mb-2">تواصل معنا</h1>
        <p className="text-gray-500 mb-6">
          للتواصل والاستفسار، نحن جاهزون للرد عليك
        </p>

        {/* رقم الهاتف */}
        <div className="mb-6 p-4 bg-gray-200 rounded-lg md:text-2xl">
          <p className="font-semibold">📞 الهاتف</p>
          <a
            href="tel:01000022886"
            className="text-blue-600 hover:text-black hover:underline"
          >
            01000022886
          </a>
        </div>

        {/* السوشيال ميديا */}
        <div className="space-y-4">

          {/* فيسبوك */}
          <a
            href="https://www.facebook.com/cityschoolseg"
            target="_blank"
            className="flex items-center justify-between p-4 border rounded-lg hover:text-black hover:bg-blue-50 transition"
          >
            <span>📘 فيسبوك</span>
            <span className="text-blue-600">زيارة الصفحة</span>
          </a>

          {/* يوتيوب */}
          <a
            href="https://www.youtube.com/channel/UC8miiP9AkNwYdu-4_JqjKWA"
            target="_blank"
            className="flex items-center justify-between p-4 border rounded-lg hover:text-black hover:bg-red-50 transition"
          >
            <span>▶️ يوتيوب</span>
            <span className="text-red-600">زيارة القناة</span>
          </a>

        </div>

      </div>
      
    </main>
  )
}