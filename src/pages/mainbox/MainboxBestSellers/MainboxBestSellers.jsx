import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { UseFetch } from "../../../hook/UseFetch";
import ChildLoading from "../../../loading/childLoading/ChildLoading";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";

function MainboxBestSellers() {
  const { t, i18n } = useTranslation();
  const { data: seller, isLoading } = UseFetch("https://picdnlswhqdzagojulhf.supabase.co/storage/v1/object/sign/EVOS%20json/db/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFVk9TIGpzb24vZGIvZGIuanNvbiIsImlhdCI6MTc0MjU0OTA2MiwiZXhwIjoxNzc0MDg1MDYyfQ.vfpybu2AHKzJbovRgnD81v9jPC4TnvQUpogmDQGtB7w");
  return (
    <>
      {isLoading && <ChildLoading />}
      <h1 className="text-center font-semibold text-[50px] dark:text-white mb-4">
        {t("sotuvxit")}
      </h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="flex flex-col items-center justify-between px-1 mb-5"
      >
        {seller?.sotuvxitlari &&
          seller?.sotuvxitlari.map((item, id) => (
            <SwiperSlide key={id} className="border rounded-lg p-3">
              <img className="w-[500px]" src={item.image} alt="" />
              <h1 className="font-normal text-[25px] text-center mb-2 line-clamp-1 dark:text-white">
                {item?.title[i18n.language]}
              </h1>
              <p className="text-center font-semibold line-clamp-1 dark:text-white">
                {item?.desc[i18n.language]}
              </p>
              <p className="text-green-600 font-bold text-center mb-2 dark:text-white">
                Narxi: {item?.oldprice} so&apos;m
              </p>
              <Link key={id} to={`/product/${item.url}`}>
                <button className="bg-white py-2 px-3 text-black w-full rounded-lg border">
                  {t("savat")}
                </button>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default MainboxBestSellers;
