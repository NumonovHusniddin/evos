import { useTranslation } from "react-i18next";
import { UseFetch } from "../../hook/UseFetch";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import ChildLoading from "../../loading/childLoading/ChildLoading"

function Filiallar() {
  const { data: filial, isloading } = UseFetch("https://ixhhcbgznqctfsbitmtv.supabase.co/storage/v1/object/sign/api/db.json?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85ODVjMzJmOS02MjdjLTQwNjMtODIwYi1hZDMwMGI0MzRlMGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJhcGkvZGIuanNvbiIsImlhdCI6MTc1OTU3MzgxNywiZXhwIjoxNzkxMTA5ODE3fQ.2ZNDa3HNjisRb1Knp3qVBmoAQ0n2cUGN_rj1JswXRmQ");
  const { t, i18n } = useTranslation();
  useEffect(() => {
      AOS.init({ duration: 750 })
    }, []);
  return (
    <div className="container w-[100%] pt-[200px]">
      {isloading && ChildLoading}
      <h1 className="text-center text-[50px] font-semibold mb-4 text-black dark:text-white">{t("bizningfilial")}</h1>
      <div className=" grid grid-cols-4 gap-4">
        {filial?.filiallar &&
          filial?.filiallar.map((item, id) => (
            <Link key={id} to={`/filiallar/${item.url}`}>
              <div data-aos="zoom-out-up" className="flex bg-white dark:bg-[#293147cc] flex-col dark:hover:shadow-[#ffffff] cursor-pointer items-center border rounded-lg px-3 py-6 group hover:shadow-lg hover:shadow-[#867f7f] transition-all duration-400">
              <img
                className="h-auto cursor-pointer rounded-3xl max-w-[200px] mb-4"
                src={item.image}
                alt="sda"
              />
              <article>
                <h1 className=" text-[20px] font-bold mb-4 text-center text-black dark:text-white">
                  {item.title[i18n.language]}
                </h1>
                <p className="text-center font-semibold text-[20px] text-black dark:text-white">{item.ishvaqti}</p>
              </article>
            </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Filiallar