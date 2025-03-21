import { useTranslation } from "react-i18next";
import "./CallCenter.css";
import { useNavigate } from "react-router-dom";

function CallCenter() {
  const { t } = useTranslation();
  const navigate = useNavigate()

  const Back = () => {
    navigate("/vakantlar")
  }
  return (
    <>
      <div className=" container pt-[150px]">
        <h1 className=" text-green-700 text-[40px] font-bold mb-3">
          {t("vf.call")}
        </h1>
        <p className=" text-[25px] dark:text-white mb-2">{t("center.q1")}</p>
        <p className="text-[30px] dark:text-white font-semibold mb-2">
          {t("center.q2")}
        </p>
        <p className=" text-[25px] dark:text-white mb-2">{t("center.q3")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("center.q4")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("center.q5")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("center.q6")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("center.q7")}</p>
        <p className=" text-[25px] dark:text-white mb-5">{t("center.q8")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("center.q9")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("center.q10")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("center.q11")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("center.q12")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("center.q13")}</p>
        <p className=" text-[25px] dark:text-white mb-2">{t("center.q14")}</p>
      </div>
      <article className=" flex items-center justify-center">
        <button onClick={Back} className="py-3 px-10 border text-[20px] rounded-lg border-green-700 text-green-700 hover:text-white hover:bg-green-700 transition-all duration-200">
          {t("ortga")}
        </button>
      </article>
    </>
  );
}

export default CallCenter;
