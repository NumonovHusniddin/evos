import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Deliver() {
    const { t } = useTranslation()
    const navigate = useNavigate()

    const Back = () => {
        navigate("/vakantlar")
    }
  return (
    <>
      <div className=" container pt-[150px]">
        <h1 className=" text-green-700 text-[40px] font-bold mb-3">
          {t("vf.y")}
        </h1>
        <p className=" text-[25px] dark:text-white mb-2">{t("deliver.p1")}</p>
        <p className="text-[30px] dark:text-white font-semibold mb-2">
          {t("deliver.p2")}
        </p>
        <p className=" text-[25px] dark:text-white mb-2">{t("deliver.p3")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("deliver.p4")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("deliver.p5")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("deliver.p6")}</p>
        <p className=" text-[30px] dark:text-white mb-2 font-semibold">{t("deliver.p7")}</p>
        <p className=" text-[25px] dark:text-white mb-5">{t("deliver.p8")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("deliver.p9")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("deliver.p10")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("deliver.p11")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("deliver.p12")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("deliver.p13")}</p>
        <p className=" text-[30px] dark:text-white mb-2 font-semibold">{t("deliver.p15")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("deliver.p16")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("deliver.p17")}</p>
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

export default Deliver;
