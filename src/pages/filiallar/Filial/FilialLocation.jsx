import { useParams } from "react-router-dom";
import { UseFetch } from "../../../hook/UseFetch";
import { useTranslation } from "react-i18next";


function FilialLocation() {
  const param = useParams()
  const paramUrl = param.filialrouter
  const { data: filial, isLoading } = UseFetch("https://picdnlswhqdzagojulhf.supabase.co/storage/v1/object/sign/EVOS%20json/db/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJFVk9TIGpzb24vZGIvZGIuanNvbiIsImlhdCI6MTc0MjU0OTA2MiwiZXhwIjoxNzc0MDg1MDYyfQ.vfpybu2AHKzJbovRgnD81v9jPC4TnvQUpogmDQGtB7w")
  const findFilial = filial?.filiallar.find((urlF) => urlF.url == paramUrl)
  const { t, i18n } = useTranslation()
  return (
    <div className="container pt-[140px]">
      {isLoading && <h1>Loading...</h1>}
        <h1 className="text-[50px] font-bold text-black dark:text-white">{findFilial?.title[i18n.language]}</h1>
          <article className="flex gap-3 items-center">
            <p className="font-medium text-[25px] text-black dark:text-white">{t("manzil")}:</p>
            <h3 className="text-[25px] font-normal text-black dark:text-white">{findFilial?.manzil[i18n.language]}</h3>
          </article>
          <article className="flex gap-3 items-center">
            <p className="font-medium text-[25px] text-black dark:text-white">{t("ishvaqti")}:</p>
            <h3 className="text-[25px] font-normal text-black dark:text-white">{findFilial?.ishvaqti}</h3>
          </article>
      <iframe className="w-full h-[590px] rounded-md" src={findFilial?.map} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

export default FilialLocation;
