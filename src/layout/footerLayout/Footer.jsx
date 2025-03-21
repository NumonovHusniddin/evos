import { FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <div className="w-full bg-gray-300">
            <div className="container py-7 flex items-center justify-between">
                <article>
                    <p className=" font-semibold text-gray-700  ">&copy; Evos 2006 - 2025 All rights reserved</p>
                </article>
                <article className=" flex items-center gap-4">
                    <Link to={"https://t.me//husniddin_developer"}>
                        <FaTelegram className=" size-7 fill-green-700" />
                    </Link>
                    <Link to={"https://www.instagram.com/__numonov00/"}>
                        <FaInstagram className=" size-7 fill-green-700" />
                    </Link>
                    <FaFacebook className=" size-7 fill-green-700" />
                </article>
            </div>
        </div>
    )
}

export default Footer
