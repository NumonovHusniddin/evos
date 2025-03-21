import { useTranslation } from "react-i18next"
import { Link, Outlet } from "react-router-dom"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

function MainboxFoods() {
  const { t } = useTranslation()
  return (
    <div className=" container pt-[200px]">
      <Swiper
      slidesPerView={10}
      spaceBetween={0}
      grabCursor={true}
      className="mb-5 border border-green-700 rounded-lg ">
        <SwiperSlide className="text-[20px] dark:text-white hover:text-green-700 transition-all duration-200 text-center"><Link to={""}>{t("ramazon")}</Link></SwiperSlide>
        <SwiperSlide className="text-[20px] dark:text-white hover:text-green-700 transition-all duration-200 text-center"><Link to={"aksiya"}>{t("aksiya")}</Link></SwiperSlide>
        <SwiperSlide className="text-[20px] dark:text-white hover:text-green-700 transition-all duration-200 text-center"><Link to={"nonushtalar"}>{t("nonushta")}</Link></SwiperSlide>
        <SwiperSlide className="text-[20px] dark:text-white hover:text-green-700 transition-all duration-200 text-center"><Link to={"lavash"}>{t("lavash")}</Link></SwiperSlide>
        <SwiperSlide className="text-[20px] dark:text-white hover:text-green-700 transition-all duration-200 text-center"><Link to={"trindwich"}>{t("tri")}</Link></SwiperSlide>
        <SwiperSlide className="text-[20px] dark:text-white hover:text-green-700 transition-all duration-200 text-center"><Link to={"shaurma"}>{t("shaurma")}</Link></SwiperSlide>
        <SwiperSlide className="text-[20px] dark:text-white hover:text-green-700 transition-all duration-200 text-center"><Link to={"burger"}>{t("burger")}</Link></SwiperSlide>
        <SwiperSlide className="text-[20px] dark:text-white hover:text-green-700 transition-all duration-200 text-center"><Link to={"hot-dog"}>{t("hotdog")}</Link></SwiperSlide>
        <SwiperSlide className="text-[20px] dark:text-white hover:text-green-700 transition-all duration-200 text-center"><Link to={"kartoshka"}>{t("kartoshka")}</Link></SwiperSlide>
        <SwiperSlide className="text-[20px] dark:text-white hover:text-green-700 transition-all duration-200 text-center"><Link to={"sneklar"}>{t("snek")}</Link></SwiperSlide>
        <SwiperSlide className="text-[20px] dark:text-white hover:text-green-700 transition-all duration-200 text-center"><Link to={"taom"}>{t("taom")}</Link></SwiperSlide>
        <SwiperSlide className="text-[20px] dark:text-white hover:text-green-700 transition-all duration-200 text-center"><Link to={"combo"}>{t("combo")}</Link></SwiperSlide>
        <SwiperSlide className="text-[20px] dark:text-white hover:text-green-700 transition-all duration-200 text-center"><Link to={"setlar-va-juftliklar"}>{t("set")}</Link></SwiperSlide>
        <SwiperSlide className="text-[20px] dark:text-white hover:text-green-700 transition-all duration-200 text-center"><Link to={"desert"}>{t("desert")}</Link></SwiperSlide>
        <SwiperSlide className="text-[20px] dark:text-white hover:text-green-700 transition-all duration-200 text-center"><Link to={"souslar-va-qushimchalar"}>{t("sous")}</Link></SwiperSlide>
        <SwiperSlide className="text-[20px] dark:text-white hover:text-green-700 transition-all duration-200 text-center"><Link to={"salat"}>{t("salat")}</Link></SwiperSlide>
        <SwiperSlide className="text-[20px] dark:text-white hover:text-green-700 transition-all duration-200 text-center"><Link to={"sharbatlar"}>{t("sharbat")}</Link></SwiperSlide>
        <SwiperSlide className="text-[20px] dark:text-white hover:text-green-700 transition-all duration-200 text-center"><Link to={"ichimliklar"}>{t("ichimlik")}</Link></SwiperSlide>
        <SwiperSlide className="text-[20px] dark:text-white hover:text-green-700 transition-all duration-200 text-center"><Link to={"choy-va-qahva"}>{t("choy")}</Link></SwiperSlide>
      </Swiper>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainboxFoods