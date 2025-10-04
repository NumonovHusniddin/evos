import { Link, useNavigate } from "react-router-dom";
import { UseFetch } from "../../../../hook/UseFetch";
import { useTranslation } from "react-i18next";

function NewFoods() {
  const { data: news, isLoading } = UseFetch("https://ixhhcbgznqctfsbitmtv.supabase.co/storage/v1/object/sign/api/db.json?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODVjMzJmOS02MjdjLTQwNjMtODIwYi1hZDMwMGI0MzRlMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcGkvZGIuanNvbiIsImlhdCI6MTc1OTU3MzgxNywiZXhwIjoxNzkxMTA5ODE3fQ.2ZNDa3HNjisRb1Knp3qVBmoAQ0n2cUGN_rj1JswXRmQ");
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const ToMenu = () => {
    navigate("/menu");
  };
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      <div className="container">
      <article className="flex items-center justify-between mb-5">
        <h1 className="font-semibold text-[60px] dark:text-white">{t("news")}</h1>
          <button
            onClick={ToMenu}
            className="text-[30px] py-3 px-6 border rounded-lg border-green-700 text-green-700 hover:text-white hover:bg-green-700 transition-all duration-200"
          >
            To&apos;liq menu
          </button>
        </article>
        <div className="grid grid-cols-4 gap-1 gap-y-6 gap-x-2 mb-5">
          {news?.foods?.yangiliklar1 &&
            news?.foods?.yangiliklar1.map((item, id) => (
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
                <Link className="w-full" to={`/products/${item.urla}`}>
                  <button className="bg-white py-2 px-3 text-black w-full rounded-lg border">
                    {t("savat")}
                  </button>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default NewFoods;
