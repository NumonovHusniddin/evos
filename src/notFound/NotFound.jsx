import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate()

    const Back = () => {
        navigate("/")
    }
  return (
    <div className=" fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
      <h1 className=" text-green-700 text-[60px] font-bold">404 NOT FOUND</h1>
      <article className=" flex items-center justify-center">
        <button onClick={Back} className=" py-2 px-6 border border-green-700 text-[20px] font-semibold text-green-700 rounded-lg hover:bg-green-700 hover:text-white transition-all duration-200">BACK TO MAIN</button>
      </article>
    </div>
  );
}

export default NotFound;
