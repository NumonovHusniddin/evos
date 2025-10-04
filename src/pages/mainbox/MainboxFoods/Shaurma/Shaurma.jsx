import { Link } from "react-router-dom"
import { UseFetch } from "../../../../hook/UseFetch"
import { useTranslation } from "react-i18next"


function Shaurma() {
  const { data: shaurma, isLoading } = UseFetch("https://ixhhcbgznqctfsbitmtv.supabase.co/storage/v1/object/sign/api/db.json?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODVjMzJmOS02MjdjLTQwNjMtODIwYi1hZDMwMGI0MzRlMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcGkvZGIuanNvbiIsImlhdCI6MTc1OTU3MzgxNywiZXhwIjoxNzkxMTA5ODE3fQ.2ZNDa3HNjisRb1Knp3qVBmoAQ0n2cUGN_rj1JswXRmQ")
  const { t, i18n } = useTranslation()
  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      <div className="grid grid-cols-4 gap-x-4 gap-y-5">
        {shaurma?.foods?.shaurma &&
          shaurma?.foods?.shaurma.map((item, id) => (
            <div
              key={id}
              className="border rounded-lg p-5 flex flex-col items-start"
            >
              <img className="max-w-[320px]" src={item.image} alt="" />
              <h1 className="line-clamp-1 mb-3 font-semibold text-[25px] text-green-700">
                {item.title[i18n.language]}
              </h1>
              <p className="line-clamp-2 text-[15px] font-bold text-gray-500 mb-3">
                {item.desc[i18n.language]}
              </p>
              <p className="font-bold text-green-700 mb-2">{t("narx")}: {item?.price}</p>
              <Link to={`/shaurma/${item.urlShaurma}`} className="w-full">
                <button className="bg-white py-2 px-3 text-black w-full rounded-lg border">
                  {t("savat")}
                </button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Shaurma