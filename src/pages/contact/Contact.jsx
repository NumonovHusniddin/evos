import { useTranslation } from "react-i18next"

function Contact() {
    const { t } = useTranslation()
  return (
    <div className=" container pt-[200px] mb-[380px]">
      <h1 className=" text-center font-bold text-green-700 text-[40px] mb-5">{t("vf.y")}</h1>
      <p className="mb-5 font-semibold text-[30px] text-center dark:text-white">+998 71 203 12 12</p>
      <h1 className=" text-center font-bold text-green-700 text-[40px] mb-5">{t("vf.call")}</h1>
      <article className="flex items-center justify-evenly">
        <p className=" font-semibold text-[30px] dark:text-white">+998 71-203-12-12</p>
        <p className=" font-semibold text-[30px] dark:text-white">+998 71-203-55-55</p>
      </article>
    </div>
  )
}

export default Contact
