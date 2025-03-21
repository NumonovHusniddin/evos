import { useTranslation } from "react-i18next";
import { UseFetch } from "../../hook/UseFetch";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import MainLoading from "../../loading/mainLoading/MainLoading"

function News() {
  const { data: news, isloading } = UseFetch("https://picdnlswhqdzagojulhf.supabase.co/storage/v1/object/sign/EVOS%20json/db/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFVk9TIGpzb24vZGIvZGIuanNvbiIsImlhdCI6MTc0MjU0OTA2MiwiZXhwIjoxNzc0MDg1MDYyfQ.vfpybu2AHKzJbovRgnD81v9jPC4TnvQUpogmDQGtB7w")
  const { i18n } = useTranslation()
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, []);
  return (
    <div className='container w-[100%] pt-[200px]'>
      {isloading && MainLoading}
      {news?.swiper1?.nonushtaKombo && news?.swiper1?.nonushtaKombo.map((item, id) => (
        <div key={id} data-aos="fade-up" className="flex items-center gap-10 p-10 mb-5 border rounded-lg">
          <img className="w-[450px] rounded-xl" src={item.image} alt="" />
          <article>
            <h1 className="text-[45px] font-semibold mb-2 dark:text-white">{item.title[i18n.language]}</h1>
            <p className=" text-[25px] dark:text-white">{item.description[i18n.language]}</p>
          </article>
        </div>
      ))}
      {news?.swiper1?.evosKomboMenu && news?.swiper1?.evosKomboMenu.map((item, id) => (
        <div key={id} data-aos="fade-right" className="flex items-center gap-10 p-10 mb-5 border rounded-lg">
          <img className="w-[450px] rounded-xl" src={item.image} alt="" />
          <article>
            <h1 className="text-[30px] font-semibold mb-2 dark:text-white">{item.title[i18n.language]}</h1>
            <p className=" text-[15px] mb-3 dark:text-white">{item.maslahat[i18n.language]}</p>
            <p className="mb-2 dark:text-white">{item.combo1[i18n.language]}</p>
            <p className="mb-2 dark:text-white">{item.combo2[i18n.language]}</p>
            <p className="mb-2 dark:text-white">{item.combo3[i18n.language]}</p>
            <p className="mb-2 dark:text-white">{item.combo4[i18n.language]}</p>
            <p className="mb-2 dark:text-white">{item.combo5[i18n.language]}</p>
            <p className="mb-3 dark:text-white">{item.combo6[i18n.language]}</p>
            <p>{item.muddat[i18n.language]}</p>
          </article>
        </div>
      ))}
      {news?.swiper1?.issiqJuftlik && news?.swiper1?.issiqJuftlik.map((item, id) => (
        <div key={id} data-aos="fade-left" className="flex items-start gap-10 p-10 mb-5 border rounded-lg">
          <img className="w-[450px] rounded-xl" src={item.image} alt="" />
          <article>
            <h1 className="text-[30px] font-semibold mb-16 dark:text-white">{item.title[i18n.language]}</h1>
            <p className=" text-[15px] font-medium mb-6 dark:text-white">{item.description[i18n.language]}</p>
            <p className=" text-[15px] font-medium mb-6 dark:text-white">{item.aksiyaMuddat[i18n.language]}</p>
            <p className=" text-[15px] font-medium mb-6 dark:text-white">{item.ogohlantirish[i18n.language]}</p>
            <p className=" text-[15px] font-medium mb-6 dark:text-white">{item.maslahat[i18n.language]}</p>
          </article>
        </div>
      ))}
      {news?.swiper1?.evosBolalarMaydochasi && news?.swiper1?.evosBolalarMaydochasi.map((item, id) => (
        <div key={id} data-aos="flip-left" className="flex items-start gap-10 p-10 mb-5 border rounded-lg">
          <img className="w-[450px] rounded-xl" src={item.image} alt="" />
          <article>
            <h1 className="text-[30px] font-semibold mb-16 dark:text-white">{item.title[i18n.language]}</h1>
            <p className=" text-[15px] font-medium mb-6 dark:text-white">{item.description1[i18n.language]}</p>
            <p className=" text-[15px] font-medium mb-6 dark:text-white">{item.description2[i18n.language]}</p>
            <p className=" text-[15px] font-medium mb-6 dark:text-white">{item.description3[i18n.language]}</p>
            <p className=" text-[15px] font-medium mb-6 dark:text-white">{item.description4[i18n.language]}</p>
            <p className=" text-[15px] font-medium mb-6 dark:text-white">{item.description5[i18n.language]}</p>
            <p className=" text-[15px] font-medium mb-6 dark:text-white">{item.description6[i18n.language]}</p>
          </article>
        </div>
      ))}
      {news?.swiper1?.tableServis && news?.swiper1?.tableServis.map((item, id) => (
        <div key={id} data-aos="flip-right" className="flex items-start gap-10 p-10 mb-5 border rounded-lg">
          <img className="w-[450px] rounded-xl" src={item.image} alt="" />
          <article>
            <h1 className="text-[30px] font-semibold mb-2 dark:text-white">{item.title[i18n.language]}</h1>
            <p className=" text-[15px] font-medium mb-3 dark:text-white">{item.description[i18n.language]}</p>
            <p className="mb-2 font-normal">{item.bu[i18n.language]}</p>
            <p className="mb-2 dark:text-white">{item.titles1[i18n.language]}</p>
            <p className="mb-2 dark:text-white">{item.titles2[i18n.language]}</p>
            <p className="mb-2 dark:text-white">{item.titles3[i18n.language]}</p>
            <p className="mb-3 dark:text-white">{item.tizim[i18n.language]}</p>
            <p className="mb-3 dark:text-white">{item.out[i18n.language]}</p>
            <p>{item.chaqirish[i18n.language]}</p>
          </article>
        </div>
      ))}
      {news?.swiper1?.vodnikFilial && news?.swiper1?.vodnikFilial.map((item, id) => (
        <div key={id} data-aos="zoom-in-up" className="flex items-center gap-10 p-10 mb-5 border rounded-lg">
          <img className="w-[450px] rounded-xl" src={item.image} alt="" />
          <article>
            <h1 className="text-[30px] font-semibold mb-16 dark:text-white">{item.title[i18n.language]}</h1>
            <p className=" text-[15px] font-medium mb-6 dark:text-white">{item.description[i18n.language]}</p>
            <p className="mb-5 font-normal dark:text-white">{item.maslahat[i18n.language]}</p>
          </article>
        </div>
      ))}
    </div>
  );
}

export default News;