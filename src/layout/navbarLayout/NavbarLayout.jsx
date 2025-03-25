import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Logo from "../../../public/imgs/Evos2.png";
import Logo1 from "../../../public/imgs/Evos.png";
import { ChevronUp, Sun, Moon } from "lucide-react";

import { useTheme } from "../../hook/useTheme";

import "./NavbarLayout.css";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import Footer from "../footerLayout/Footer";

function NavbarLayout() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useTheme();

  const onchangeLanguage = (e, til) => {
    e.preventDefault();
    i18n.changeLanguage(til);
  };

  return (
    <>
      <header>
        <nav className="bg-[#ffffffec] fixed w-full z-[999] dark:bg-[#0a0f1fde] dark:shadow-[#ffffff] border-b-[1px] border-b-[#0a1020] dark:border-b-[#ffffff]">
          <div className="flex items-center justify-between max-w-[1450px] m-auto pt-1">
            <Link to={"/"}>
              <img
                className="w-[200px] h-[130px] -pt-[30px] object-cover"
                src={theme === "light" ? Logo1 : Logo}
                alt="Logo"
              />
            </Link>
            <ul className="flex items-center gap-5 w-[535px]">
              <li className="hover:text-green-600 cursor-pointer text-[16px] dark:text-white dark:hover:text-white dark:hover:border-white duration-450 hover:border-b-[1px] transition-all hover:border-green-600 border-b-transparent border-b-[1px]">
                <Link to={"/filiallar"}>{t("filial")}</Link>
              </li>
              <li className="hover:text-green-600 cursor-pointer text-[16px] dark:text-white dark:hover:text-white dark:hover:border-white duration-450 hover:border-b-[1px] transition-all hover:border-green-600 border-b-transparent border-b-[1px]">
                <Link to={"/vakantlar"}>{t("vakantlar")}</Link>
              </li>
              <li className="hover:text-green-600 cursor-pointer text-[16px] dark:text-white dark:hover:text-white dark:hover:border-white duration-450 hover:border-b-[1px] transition-all hover:border-green-600 border-b-transparent border-b-[1px]">
                <Link to={"/news"}>{t("yangiliklar")}</Link>
              </li>
              <li className="hover:text-green-600 cursor-pointer text-[16px] dark:text-white dark:hover:text-white dark:hover:border-white duration-450 hover:border-b-[1px] transition-all hover:border-green-600 border-b-transparent border-b-[1px]">
                <Link to={"/about"}>{t("haqida")}</Link>
              </li>
              <li className="hover:text-green-600 cursor-pointer text-[16px] dark:text-white dark:hover:text-white dark:hover:border-white duration-450 hover:border-b-[1px] transition-all hover:border-green-600 border-b-transparent border-b-[1px]">
                <Link to={"/contact"}>{t("kontakt")}</Link>
              </li>
            </ul>
            <div className="relative group z-[2]">
              <p className="flex items-center justify-center cursor-pointer text-black dark:text-white">
                {t("til")}
                <ChevronUp className="group-hover:rotate-[180deg] duration-300 stroke-black dark:stroke-white" />
              </p>
              <div className="absolute bg-[white] -left-[50px] -top-[-25px] py-5 rounded-lg border border-[#747474] hidden group-hover:inline duration-300 dark:bg-[#0a0f1f]">
                <p
                  onClick={(e) => onchangeLanguage(e, "uz")}
                  className="cursor-pointer text-[20px] font-semibold text-center mb-2 text-black dark:text-white hover:bg-gray-400 transition-all duration-100 px-5 py-[2px]"
                >
                  O&apos;zbekcha
                </p>
                <p
                  onClick={(e) => onchangeLanguage(e, "en")}
                  className="cursor-pointer text-[20px] font-semibold text-center mb-2 text-black dark:text-white hover:bg-gray-400 transition-all duration-100 px-5 py-[2px]"
                >
                  English
                </p>
                <p
                  onClick={(e) => onchangeLanguage(e, "ru")}
                  className="cursor-pointer text-[20px] font-semibold text-center text-black dark:text-white hover:bg-gray-400 transition-all duration-100 px-5 py-[2px]"
                >
                  Русский
                </p>
              </div>
            </div>
            <p
              className="m-0 text-black cursor-pointer"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Moon className="stroke-black dark:stroke-white" />
              ) : (
                <Sun className="stroke-black dark:stroke-white" />
              )}
            </p>

            <SignedOut>
              <button className=" py-2 px-4 border border-green-700 rounded-lg text-green-700 hover:bg-green-700 hover:text-white transition-all duration-200">
                <SignInButton mode="modal" />
              </button>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </header>
      <main className="pb-[10px]">
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default NavbarLayout;
