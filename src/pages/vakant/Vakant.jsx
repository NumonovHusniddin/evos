import { useTranslation } from "react-i18next"
import VFisrt from "./vFirst/VFisrt"
import VSecond from "./VSecond/VSecond"
import VThird from "./VThird/VThird"


function Vakansiya() {
  const { t } = useTranslation()
  return (
    <div className=" container pt-[130px]">
      <h1 className=" text-center text-[70px] font-bold text-green-700 mb-5">{t("vakant.l1")}</h1>
      <p className=" text-center text-[25px] dark:text-white mb-5">{t("vakant.p")}</p>
      <VFisrt/>
      <VSecond/>
      <VThird/>
    </div>
  )
}

export default Vakansiya