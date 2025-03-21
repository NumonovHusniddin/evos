import { useNavigate, useParams } from "react-router-dom";
import { getFamily } from "../../../../constants/Constants";
import { useTranslation } from "react-i18next";

function VLocation() {
  const family = getFamily;
  const param = useParams();
  const paramID = param.id;
  const findID = family.find((item) => item.id == parseInt(paramID));
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const Back = () => {
    navigate("/vakantlar");
  };
  return (
    <div className=" container pt-[180px]">
      <h1 className=" text-center text-[60px] font-bold text-green-700 mb-6">
        {findID.title[i18n.language]}
      </h1>
      <p className=" text-center text-[25px] font-semibold text-gray-400 mb-3">
        {findID.desc1[i18n.language]}
      </p>
      <p className=" text-center text-[25px] font-semibold text-gray-400 mb-3">
        {findID.desc2[i18n.language]}
      </p>
      <p className=" text-center text-[25px] font-semibold text-gray-400 mb-5">
        {findID.desc3[i18n.language]}
      </p>
      <article className=" flex items-center justify-center">
        <button onClick={Back} className="py-3 px-6 border border-green-700 text-[25px] rounded-lg text-green-700 hover:text-white hover:bg-green-700 transition-all duration-200">
          {t("ortga")}
        </button>
      </article>
    </div>
  );
}

export default VLocation;
