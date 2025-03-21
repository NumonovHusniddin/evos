import { useTranslation } from "react-i18next"
import { UseFetch } from "../../../../hook/UseFetch"
import { Link } from "react-router-dom"

function Sharbat() {
  const { data: sharbat, isLoading } = UseFetch("https://picdnlswhqdzagojulhf.supabase.co/storage/v1/object/sign/EVOS%20json/db/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFVk9TIGpzb24vZGIvZGIuanNvbiIsImlhdCI6MTc0MjU0OTA2MiwiZXhwIjoxNzc0MDg1MDYyfQ.vfpybu2AHKzJbovRgnD81v9jPC4TnvQUpogmDQGtB7w")
  const { t, i18n } = useTranslation()
  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      <div className="grid grid-cols-4 gap-x-4 gap-y-5">
        {sharbat?.foods?.sharbat &&
          sharbat?.foods?.sharbat.map((item, id) => (
            <div
              key={id}
              className="flex flex-col items-center p-5 border rounded-lg"
            >
              <img className="max-w-[250px]" src={item.image} alt="" />
              <h1 className="line-clamp-1 mb-3 font-semibold text-[25px] text-green-700">
                {item.title[i18n.language]}
              </h1>
              <p className="line-clamp-2 text-[15px] font-bold text-gray-500 mb-3">
                {item.desc[i18n.language]}
              </p>
              <p className="mb-2 font-bold text-green-700">{t("narx")}: {item?.price}</p>
              <Link to={`/sharbatlar/${item.urlSharbat}`} className="w-full">
                <button className="w-full px-3 py-2 text-black bg-white border rounded-lg">
                  {t("savat")}
                </button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Sharbat
