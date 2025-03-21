import { useNavigate, useParams } from "react-router-dom"
import { getBrend } from "../../../constants/Constants"
import { useTranslation } from "react-i18next"

function BrendLocation() {
    const brend = getBrend
    const param = useParams()
    const paramID = param.id
    const findBrend = brend.find((item) => item.id == parseInt(paramID))
    const { t, i18n } = useTranslation()
    const navigate = useNavigate()

    const Back = () => {
        navigate("/about")
    }
  return (
    <div className=" pt-[200px] container mb-[280px]">
      <h1 className=" text-green-700 text-center text-[45px] font-bold mb-5">{findBrend?.title[i18n.language]}</h1>
      <p className=" mb-3">{findBrend.desc1[i18n.language]}</p>
      <p className=" mb-3">{findBrend.desc2[i18n.language]}</p>
      <p className=" mb-3">{findBrend.desc3[i18n.language]}</p>
      <p className=" mb-3">{findBrend.desc4[i18n.language]}</p>
      <article className=" flex items-center justify-center">
        <button onClick={Back} className=" py-2 px-5 border border-green-700 rounded-lg text-green-700 hover:bg-green-700 hover:text-white transition-all duration-200">{t("ortga")}</button>
      </article>
    </div>
  )
}

export default BrendLocation
