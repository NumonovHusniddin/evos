import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UseFetch } from "../../../../../hook/UseFetch";

function FindAksiya() {
  const { data: aksiya, isloading } = UseFetch("https://ixhhcbgznqctfsbitmtv.supabase.co/storage/v1/object/sign/api/db.json?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODVjMzJmOS02MjdjLTQwNjMtODIwYi1hZDMwMGI0MzRlMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcGkvZGIuanNvbiIsImlhdCI6MTc1OTU3MzgxNywiZXhwIjoxNzkxMTA5ODE3fQ.2ZNDa3HNjisRb1Knp3qVBmoAQ0n2cUGN_rj1JswXRmQ");
  const param = useParams();
  const paramAksiya = param.aksiya;
  const FindAksiya = aksiya?.foods?.aksiyalar.find(
    (item) => item.urlAksiya === paramAksiya
  );
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const Back = () => {
    navigate("/menu/aksiya");
  };
  return (
    <div className=" container pt-[200px]">
      {isloading && <h1>Loading...</h1>}
      <div className="flex flex-col items-center justify-center">
        <img className="max-w-[600px]" src={FindAksiya?.image} alt="" />
        <div className="flex flex-col items-center">
          <h1 className="text-black dark:text-white text-[40px] text-center mb-2">
            {FindAksiya?.title[i18n.language]}
          </h1>
          <p className="text-black dark:text-white text-center max-w-[800px] m-auto font-semibold mb-4 text-[25px]">
            {FindAksiya?.desc[i18n.language]}
          </p>

          <p className="text-center font-bold text-[30px] dark:text-white mb-3">
            {t("narx")}: {""}
            <span className=" text-green-600">{FindAksiya?.price}</span>
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
  );
}

export default FindAksiya;
