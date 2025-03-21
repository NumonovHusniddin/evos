import { useTranslation } from "react-i18next";
import { getProfillar } from "../../../constants/Constants";

function VSecond() {
  const { t, i18n } = useTranslation();
  const profil = getProfillar;
  return (
    <div className=" container mb-20">
      <h1 className=" text-[45px] font-bold text-green-700 mb-4">
        {t("asosiy")}
      </h1>
      <div className=" grid grid-cols-2 gap-2">
        {profil &&
          profil?.map((item, id) => (
            <div className=" border p-2 rounded-lg" key={id}>
              <article className=" p-4 border-green-700 rounded-xl inline-flex dark:bg-white border-[3px]">
                <img className="w-[100px]" src={item.svg} alt="" />
              </article>
              <h1 className=" text-[30px] font-semibold mb-5 dark:text-white">{item.title[i18n.language]}</h1>
              <p className=" tetx-[20px] font-semibold text-gray-500 mb-3">{item.desc1[i18n.language]}</p>
              <p className=" tetx-[20px] font-semibold text-gray-500 mb-3">{item.desc2[i18n.language]}</p>
              <p className=" tetx-[20px] font-semibold text-gray-500">{item.desc3[i18n.language]}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default VSecond;
