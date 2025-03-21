import { useState } from "react";
import { useTranslation } from "react-i18next";

function BuyProduct() {
  const [data, setData] = useState({
      names: ""
    });
  
    const botToken = "7778615071:AAFx8AHpnpqNmu6-qUe00zCWjgBNI7M28mM";
    const chat_id = 6667365722;
  
    const handleOnSubmit = async (e) => {
      e.preventDefault();
  
      const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chat_id,
            text: `${data.names} 👤 karta raqamli mijoz sizdan mahsulot xarid qildi`,
          }),
        });
        if (response.ok) {
          alert("To'lov amalga oshirildi !");
          setData({ names: ""});
        } else {
          alert("Xatolik Yuz berdi");
          console.error(`Sizda Xatolik yuzb berdi, ${response.statusText}`);
        }
      } catch (error) {
        console.error(`Sizda KattaXatoliklar bor, ${error}`);
      }
    };
  
    const handleChange = (e) => {
      const value = e.target.value;
      if (/^\d{0,12}$/.test(value)) { 
        setData({ ...data, [e.target.name]: value });
      }
    };
    const isFormValid =
      data.names.trim().length == 12
  
      const { t } = useTranslation()
  
    return (
      <div className="container pt-[300px] mb-[334px]">
        <p className="text-[25px] font-bold text-center mb-5 dark:text-white">
          {t("card")}
        </p>
        <form
          onSubmit={handleOnSubmit}
          className="m-auto flex flex-col items-center w-2/4 py-7 rounded-xl"
        >
          <label className="w-[400px] border rounded-lg mb-3 ">
            <input
              name="names"
              value={data.names}
              onChange={handleChange}
              className="w-full h-full py-3 px-2 outline-none border focus:border-green-700 rounded-lg placeholder:text-green-700"
              type="number"
              placeholder="**** **** **** ****"
            />
          </label>
          <button
            type="submit"
            className="px-10 py-2 border rounded-md bg-green-700 hover:bg-green-500 transition-all duration-200 text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={!isFormValid}
          >
            {t("savat")}
          </button>
        </form>
      </div>
    );
}

export default BuyProduct