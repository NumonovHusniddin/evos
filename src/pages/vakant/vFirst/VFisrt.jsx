import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function VFisrt() {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-3 gap-1 mb-32">
      <div className="border pl-10 py-3 rounded-lg max-w-[420px] pr-3 flex flex-col items-center justify-between">
        <div className="mb-2">
          <h1 className="text-[35px] font-bold text-green-700 mb-3">
            {t("vf.call")}
          </h1>
          <ul className=" text-gray-600">
            <li className=" text-[18px] list-disc mb-2 font-semibold dark:text-white">
              {t("vf.c1")}
            </li>
            <li className=" text-[18px] list-disc mb-2 font-semibold dark:text-white">
              {t("vf.c2")}
            </li>
            <li className=" text-[18px] list-disc mb-2 font-semibold dark:text-white">
              {t("vf.c3")}
            </li>
            <li className=" text-[18px] list-disc mb-2 font-semibold dark:text-white">
              {t("vf.c4")}
            </li>
            <li className=" text-[18px] list-disc mb-2 font-semibold dark:text-white">
              {t("vf.c5")}
            </li>
            <li className=" text-[18px] list-disc mb-2 font-semibold dark:text-white">
              {t("vf.c6")}
            </li>
            <li className=" text-[18px] list-disc mb-2 font-semibold dark:text-white">
              {t("vf.c7")}
            </li>
            <li className=" text-[18px] list-disc mb-2 font-semibold dark:text-white">
              {t("vf.c8")}
            </li>
            <li className=" text-[18px] list-disc font-semibold dark:text-white">
              {t("vf.c9")}
            </li>
          </ul>
        </div>
        <article className="flex gap-[50px]">
          <Link to={"/vakantlar/call-center-operatori"}>
            <button className="py-3 px-10 border text-[20px] rounded-lg border-green-700 text-green-700 hover:text-white hover:bg-green-700 transition-all duration-200">
              {t("vf.bt")}
            </button>
          </Link>
          <Link to={"/vakantlar/ish-ariza"}>
            <button className="py-3 px-10 border text-[20px] rounded-lg border-green-700 text-green-700 hover:text-white hover:bg-green-700 transition-all duration-200">
              {t("vf.tp")}
            </button>
          </Link>
        </article>
      </div>
      <div className="border pl-10 py-3 rounded-lg max-w-[420px] pr-3 flex flex-col items-center justify-between">
        <div className=" mb-2">
          <h1 className="text-[35px] font-bold text-green-700 mb-3">
            {t("vf.y")}
          </h1>
          <ul className=" text-gray-600">
            <li className=" text-[18px] list-disc mb-2 font-semibold dark:text-white">
              {t("vf.y1")}
            </li>
            <li className=" text-[18px] list-disc mb-2 font-semibold dark:text-white">
              {t("vf.y2")}
            </li>
            <li className=" text-[18px] list-disc mb-2 font-semibold dark:text-white">
              {t("vf.y3")}
            </li>
            <li className=" text-[18px] list-disc mb-2 font-semibold dark:text-white">
              {t("vf.y4")}
            </li>
            <li className=" text-[18px] list-disc font-semibold dark:text-white">
              {t("vf.y5")}
            </li>
          </ul>
        </div>
        <article className="flex gap-[50px]">
          <Link to={"/vakantlar/kuryer"}>
            <button className="py-3 px-10 border text-[20px] rounded-lg border-green-700 text-green-700 hover:text-white hover:bg-green-700 transition-all duration-200">
              {t("vf.bt")}
            </button>
          </Link>
          <Link to={"/vakantlar/ish-ariza"}>
            <button className="py-3 px-10 border text-[20px] rounded-lg border-green-700 text-green-700 hover:text-white hover:bg-green-700 transition-all duration-200">
              {t("vf.tp")}
            </button>
          </Link>
        </article>
      </div>
      <div className="border pl-10 py-3 rounded-lg max-w-[460px] pr-3 flex flex-col items-center justify-between">
        <div>
          <h1 className="text-[35px] text-center font-bold text-green-700 mb-3">
            {t("vf.rest")}
          </h1>
          <ul className=" text-gray-600">
            <li className=" text-[18px] list-disc mb-2 font-semibold dark:text-white">
              {t("vf.r1")}
            </li>
            <li className=" text-[18px] list-disc mb-2 font-semibold dark:text-white">
              {t("vf.r2")}
            </li>
            <li className=" text-[18px] list-disc mb-2 font-semibold dark:text-white">
              {t("vf.r3")}
            </li>
            <li className=" text-[18px] list-disc mb-2 font-semibold dark:text-white">
              {t("vf.r4")}
            </li>
            <li className=" text-[18px] list-disc font-semibold dark:text-white">
              {t("vf.r5")}
            </li>
          </ul>
        </div>
        <article className="flex gap-[50px]">
          <Link to={"/vakantlar/restoranga-ish"}>
            <button className="py-3 px-10 border text-[20px] rounded-lg border-green-700 text-green-700 hover:text-white hover:bg-green-700 transition-all duration-200">
              {t("vf.bt")}
            </button>
          </Link>
          <Link to={"/vakantlar/ish-ariza"}>
            <button className="py-3 px-10 border text-[20px] rounded-lg border-green-700 text-green-700 hover:text-white hover:bg-green-700 transition-all duration-200">
              {t("vf.tp")}
            </button>
          </Link>
        </article>
      </div>
    </div>
  );
}

export default VFisrt;
