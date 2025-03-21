import { Link } from "react-router-dom";
import { UseFetch } from "../../../../hook/UseFetch";
import { useTranslation } from "react-i18next";

function HotDog() {
  const { data: hotdog, isLoading } = UseFetch("https://picdnlswhqdzagojulhf.supabase.co/storage/v1/object/sign/EVOS%20json/db/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFVk9TIGpzb24vZGIvZGIuanNvbiIsImlhdCI6MTc0MjU0OTA2MiwiZXhwIjoxNzc0MDg1MDYyfQ.vfpybu2AHKzJbovRgnD81v9jPC4TnvQUpogmDQGtB7w");
  const { t, i18n } = useTranslation()
  return (
    <div>
      {isLoading && <h1>Loading</h1>}
      <div className="grid grid-cols-4 gap-x-4 gap-y-5">
        {hotdog?.foods?.hotdog &&
          hotdog?.foods?.hotdog.map((item, id) => (
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
              <Link to={`/hot-dog/${item.urlHotdog}`} className="w-full">
                <button className="bg-white py-2 px-3 text-black w-full rounded-lg border">
                  {t("savat")}
                </button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default HotDog;
