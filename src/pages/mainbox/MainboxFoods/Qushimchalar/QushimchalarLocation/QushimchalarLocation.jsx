import { useTranslation } from "react-i18next"
import { Link, useNavigate, useParams } from "react-router-dom"
import { UseFetch } from "../../../../../hook/UseFetch"

function QushimchalarLocation() {
  const { data: loc, isLoading } = UseFetch("https://picdnlswhqdzagojulhf.supabase.co/storage/v1/object/sign/EVOS%20json/db/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFVk9TIGpzb24vZGIvZGIuanNvbiIsImlhdCI6MTc0MjU0OTA2MiwiZXhwIjoxNzc0MDg1MDYyfQ.vfpybu2AHKzJbovRgnD81v9jPC4TnvQUpogmDQGtB7w")
  const param = useParams()
  const paramSous = param.sous
  const findSous = loc?.foods?.qushimcha.find((item) => item?.urlQushimcha === paramSous)
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()

  const Back = () => {
    navigate("/menu/souslar-va-qushimchalar")
  }
  return (
    <div className="pt-[100px] container">
      {isLoading && <h1>Loading...</h1>}
      <div className="flex flex-col items-center justify-center">
        <img className="max-w-[600px]" src={findSous?.image} alt="" />
        <div className="flex flex-col items-center">
          <h1 className="text-black dark:text-white text-[40px] text-center mb-2">
            {findSous?.title[i18n.language]}
          </h1>
          <p className="text-black dark:text-white text-center max-w-[800px] m-auto font-semibold mb-4 text-[25px]">
            {findSous?.desc[i18n.language]}
          </p>

          <p className="text-center font-bold text-[30px] dark:text-white mb-3">
            {t("narx")}: {""}
            <span className=" text-green-600">{findSous?.price}</span>
          </p>
          <article className="flex gap-4 items-center">
            <Link to={"/click"}>
              <button className="py-2 px-5 text-[30px] font-semibold border-[1px] mb-5 dark:text-white dark:border-white border-green-700 rounded-lg text-green-700 hover:bg-green-700 hover:text-white transition-all duration-200">
                {t("savat")}
              </button>
            </Link>
            <button
              onClick={Back}
              className="py-2 px-5 text-[30px] font-semibold border-[1px] dark:text-white dark:border-white border-green-700 rounded-lg text-green-700 hover:bg-green-700 hover:text-white transition-all duration-200"
            >
              {t("ortga")}
            </button>
          </article>
        </div>
      </div>
    </div>
  )
}

export default QushimchalarLocation
