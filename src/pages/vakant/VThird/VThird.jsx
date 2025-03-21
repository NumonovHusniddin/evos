import { useTranslation } from "react-i18next";
import { getFamily } from "../../../constants/Constants";
import { Link } from "react-router-dom";

function VThird() {
  const { t, i18n } = useTranslation();
  const family = getFamily;
  return (
    <div className=" conatiner mt-5">
      <h1 className="text-[40px] font-bold text-green-700 text-center mb-3">
        {t("af")}
      </h1>
      <p className="text-center font-semibold text-[20px] dark:text-white mb-10">
        {t("t")}
      </p>
      <div className="grid grid-cols-2 gap-4">
        {family &&
          family?.map((item, id) => (
            <div
              key={id}
              className=" cursor-pointer border p-5 rounded-lg border-green-700 group hover:bg-green-700 transition-all duration-200"
            >
              <article>
                <img src={item.image} alt="" />
                <p className=" text-[25px] font-bold dark:text-white group-hover:text-white transition-all duration-200">
                  {item.title[i18n.language]}
                </p>
              </article>
              <Link to={item.id}>
                <p className=" text-green-700 font-semibold group-hover:underline group-hover:text-white transition-all duration-200">
                  {t("k")}
                </p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default VThird;
