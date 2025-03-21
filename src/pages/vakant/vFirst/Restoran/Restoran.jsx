import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Restoran() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const Back = () => {
    navigate("/vakantlar");
  };
  return (
    <>
      <div className=" container pt-[150px]">
        <h1 className=" text-green-700 text-[40px] font-bold mb-3">
          {t("vf.rest")}
        </h1>
        <p className=" text-[25px] dark:text-white mb-2">{t("res.s1")}</p>
        <p className="text-[30px] dark:text-white font-semibold mb-2">
          {t("res.s2")}
        </p>
        <p className=" text-[25px] dark:text-white mb-2">{t("res.s3")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("res.s4")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("res.s5")}</p>
        <p className=" text-[30px] dark:text-white mb-2 font-semibold">
          {t("res.s6")}
        </p>
        <p className=" text-[25px] dark:text-white mb-2">{t("res.s7")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("res.s8")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("res.s9")}</p>
        <p className=" text-[30px] dark:text-white mb-2 font-semibold">
          {t("res.s10")}
        </p>
        <p className=" text-[25px] dark:text-white mb-2">{t("res.s11")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("res.s12")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("res.s13")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("res.s14")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("res.s16")}</p>
        <p className=" text-[30px] dark:text-white mb-2 font-semibold">{t("res.s17")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("res.s18")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("res.s19")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("res.s20")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("res.s21")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("res.s22")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("res.s23")}</p>
        <p className=" text-[25px] dark:text-white mb-5">{t("res.s24")}</p>
        <p className=" text-[25px] dark:text-white mb-5">{t("res.s25")}</p>
      </div>
      <article className=" flex items-center justify-center">
        <button
          onClick={Back}
          className="py-3 px-10 border text-[20px] rounded-lg border-green-700 text-green-700 hover:text-white hover:bg-green-700 transition-all duration-200"
        >
          {t("ortga")}
        </button>
      </article>
    </>
  );
}

export default Restoran;
