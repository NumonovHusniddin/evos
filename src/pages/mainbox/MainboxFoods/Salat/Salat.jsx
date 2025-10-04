import { useTranslation } from "react-i18next"
import { UseFetch } from "../../../../hook/UseFetch"
import { Link } from "react-router-dom"

function Salat() {
  const { data: salat, isLoading } = UseFetch("https://ixhhcbgznqctfsbitmtv.supabase.co/storage/v1/object/sign/api/db.json?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODVjMzJmOS02MjdjLTQwNjMtODIwYi1hZDMwMGI0MzRlMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcGkvZGIuanNvbiIsImlhdCI6MTc1OTU3MzgxNywiZXhwIjoxNzkxMTA5ODE3fQ.2ZNDa3HNjisRb1Knp3qVBmoAQ0n2cUGN_rj1JswXRmQ")
  const { t, i18n } = useTranslation()
  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      <div className="grid grid-cols-4 gap-x-4 gap-y-5">
        {salat?.foods?.salat &&
          salat?.foods?.salat.map((item, id) => (
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
              <Link to={`/salat/${item.urlSalat}`} className="w-full">
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

export default Salat