import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function IshTopshirish() {
  const [data, setData] = useState({
    names: "",
    email: "",
    message: "",
  });

  const botToken = "8196012773:AAGj3Sn58Nf_KUkt_l6eqRsJWJ9m0s4VS18";
  const chat_id = 6667365722;

  const sliceData1 = data.names.slice(0, 1).toUpperCase();
  const sliceData2 = data.names.slice(1).toLowerCase();
  const plusData = sliceData1 + sliceData2;

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chat_id,
          text: `👤 Ism: ${plusData}\n 📧 Email: ${data.email}\n 📝 Ish Uchun Ariza: ${data.message}`,
        }),
      });
      if (response.ok) {
        alert("Savolingiz Yuborildi");
        setData({ names: "", email: "", message: "" });
      } else {
        alert("Xatolik Yuz berdi");
        console.error(`Sizda Xatolik yuzb berdi, ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Sizda KattaXatoliklar bor, ${error}`);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const isFormValid =
    data.names.trim() !== "" &&
    data.email.trim() !== "" &&
    data.message.trim() !== "";

    const { t } = useTranslation()

    const navigate = useNavigate()

    const Back = () => {
      navigate("/vakantlar")
    }

  return (
    <div className="container pt-[160px]">
      <p className="text-[25px] font-bold text-center mb-5 text-white">Ishga Ariza</p>
      <form
        onSubmit={handleOnSubmit}
        className="m-auto flex flex-col items-center w-2/4 py-7"
      >
        <label className="w-[400px] border rounded-lg overflow-hidden mb-3">
          <input
            name="names"
            value={data.names}
            onChange={handleChange}
            className="w-full h-full py-3 outline-none border-2 rounded-lg px-4 focus:border-green-700"
            type="text"
            placeholder={t("form.f2")}
          />
        </label>
        <label className="w-[400px] border rounded-lg overflow-hidden mb-3">
          <input
            name="email"
            value={data.email}
            onChange={handleChange}
            className="w-full h-full py-3 outline-none border-2 rounded-lg px-4 focus:border-green-700"
            type="text"
            placeholder={t("form.f3")}
          />
        </label>
        <textarea
          name="message"
          value={data.message}
          onChange={handleChange}
          className="w-[400px] border outline-none p-2 rounded-lg mb-3 resize-none focus:border-green-700"
          rows={10}
          placeholder={t("form.f6")}
        ></textarea>
        <button
          type="submit"
          className="px-10 py-2 border rounded-md bg-green-700 hover:bg-green-500 transition-all duration-200 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={!isFormValid}
        >
          {t("form.f7")}
        </button>
      </form>
      <article className=" flex item-center justify-center">
        <button
          onClick={Back}
          type="submit"
          className="px-10 py-2 border rounded-md bg-green-700 hover:bg-green-500 transition-all duration-200 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {t("ortga")}
        </button>
      </article>
    </div>
  );
}

export default IshTopshirish;
