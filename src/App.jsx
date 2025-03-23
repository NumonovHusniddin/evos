import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UseFetch } from "./hook/UseFetch";

import MainBox from "./pages/mainbox/Mainbox";
import NavbarLayout from "./layout/navbarLayout/NavbarLayout";
import News from "./pages/news/News";
import Filiallar from "./pages/filiallar/Filiallar";
import FilialLocation from "./pages/filiallar/Filial/FilialLocation";
import MainLoading from "./loading/mainLoading/MainLoading";
import GoToBestSeller from "./pages/mainbox/MainboxBestSellers/goToBestSeller/GoToBestSeller";
import NewFoodsLocation from "./pages/mainbox/MainboxFoods/NewFoods/NewFoodsLocation/NewFoodsLocation";
import MainboxFoods from "./pages/mainbox/MainboxFoods/MainboxFoods";
import Ramazan from "./pages/mainbox/MainboxFoods/Ramazan/Ramazan";
import Aksiyalar from "./pages/mainbox/MainboxFoods/Aksiyalar/Aksiyalar";
import Nonushta from "./pages/mainbox/MainboxFoods/nonushta/Nonushta";
import FindBreak from "./pages/mainbox/MainboxFoods/nonushta/findBreak/FindBreak";
import FindRamazan from "./pages/mainbox/MainboxFoods/Ramazan/findRamazan/FindRamazan";
import FindAksiya from "./pages/mainbox/MainboxFoods/Aksiyalar/findAksiya/FindAksiya";
import Lavash from "./pages/mainbox/MainboxFoods/Lavash/Lavash";
import LavashLocation from "./pages/mainbox/MainboxFoods/Lavash/LavashLocation/LavashLocation";
import Trindwich from "./pages/mainbox/MainboxFoods/Trindwich/Trindwich";
import TrindwichLocation from "./pages/mainbox/MainboxFoods/Trindwich/TrindwichLocation/TrindwichLocation";
import Shaurma from "./pages/mainbox/MainboxFoods/Shaurma/Shaurma";
import ShaurmaLocation from "./pages/mainbox/MainboxFoods/Shaurma/ShaurmaLoaction/ShaurmaLocation";
import Burger from "./pages/mainbox/MainboxFoods/Burger/Burger";
import BurgerLocation from "./pages/mainbox/MainboxFoods/Burger/BurgerLocation/BurgerLocation";
import HotDog from "./pages/mainbox/MainboxFoods/HotDog/HotDog";
import HotDogLocation from "./pages/mainbox/MainboxFoods/HotDog/HotDogLocation/HotDogLocation";
import Kartoshka from "./pages/mainbox/MainboxFoods/Kartoshka/Kartoshka";
import KartoshkaLoaction from "./pages/mainbox/MainboxFoods/Kartoshka/KartoshkaLocation/KartoshkaLoaction";
import Snek from "./pages/mainbox/MainboxFoods/Snek/Snek";
import SnekLocation from "./pages/mainbox/MainboxFoods/Snek/SnekLocation/SnekLocation";
import Taom from "./pages/mainbox/MainboxFoods/Taom/Taom";
import TaomLocation from "./pages/mainbox/MainboxFoods/Taom/TaomLocation/TaomLocation";
import Combo from "./pages/mainbox/MainboxFoods/Combo/Combo";
import ComboLoaction from "./pages/mainbox/MainboxFoods/Combo/ComboLocation/ComboLoaction";
import Set from "./pages/mainbox/MainboxFoods/Set/Set";
import SetLocation from "./pages/mainbox/MainboxFoods/Set/SetLocation/SetLocation";
import Desert from "./pages/mainbox/MainboxFoods/Desert/Desert";
import DesertLocation from "./pages/mainbox/MainboxFoods/Desert/DesertLocation/DesertLocation";
import Qushimchalar from "./pages/mainbox/MainboxFoods/Qushimchalar/Qushimchalar";
import QushimchalarLocation from "./pages/mainbox/MainboxFoods/Qushimchalar/QushimchalarLocation/QushimchalarLocation";
import Salat from "./pages/mainbox/MainboxFoods/Salat/Salat";
import SalatLocation from "./pages/mainbox/MainboxFoods/Salat/SalatLocation/SalatLocation";
import Sharbat from "./pages/mainbox/MainboxFoods/Sharbat/Sharbat";
import SharbatLocation from "./pages/mainbox/MainboxFoods/Sharbat/SharbatLocation/SharbatLocation";
import Ichimliklar from "./pages/mainbox/MainboxFoods/Ichimliklar/Ichimliklar";
import IchimliklarLocation from "./pages/mainbox/MainboxFoods/Ichimliklar/IchimlikLocation/IchimliklarLocation";
import Choy from "./pages/mainbox/MainboxFoods/Choy/Choy";
import ChoyLocation from "./pages/mainbox/MainboxFoods/Choy/ChoyLocation/ChoyLocation";
import Vakant from "./pages/vakant/Vakant";
import CallCenter from "./pages/vakant/vFirst/callCenter/CallCenter";
import Deliver from "./pages/vakant/vFirst/Deliver/Deliver";
import Restoran from "./pages/vakant/vFirst/Restoran/Restoran";
import IshTopshirish from "./components/ishTopshirish/IshTopshirish";
import VLocation from "./pages/vakant/VThird/VLocation/VLocation";
import About from "./pages/about/About";
import BrendLocation from "./pages/about/Brends/BrendLocation";
import Contact from "./pages/contact/Contact";
import BuyProduct from "./pages/Buy/BuyProduct";
import NotFound from "./notFound/NotFound";
import NotFoundChildren from "./notFound/NotFoundChildren";

function App() {
  const {isLoading} = UseFetch()
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <NavbarLayout />,
      children: [
        {
          index: true,
          element: <MainBox />
        },
        {
          path: "/news",
          element: <News />
        },
        {
          path: "/filiallar",
          element: <Filiallar />
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/vakantlar",
          element: <Vakant/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/about/:id",
          element: <BrendLocation/>
        },
        {
          path: "vakantlar/:id",
          element: <VLocation/>
        },
        {
          path: "/vakantlar/call-center-operatori",
          element: <CallCenter/>
        },
        {
          path: "/vakantlar/kuryer",
          element: <Deliver/>
        },
        {
          path: "/vakantlar/restoranga-ish",
          element: <Restoran/>
        },
        {
          path: "/vakantlar/ish-ariza",
          element: <IshTopshirish/>
        },
        {
          path: "/click",
          element: <BuyProduct/>
        },
        {
          path: "/filiallar/:filialrouter",
          element: <FilialLocation/>
        },
        {
          path: "/product/:bestURL",
          element: <GoToBestSeller/>
        },
        {
          path: "/products/:food",
          element: <NewFoodsLocation/>
        },
        {
          path: "/breakfast/:break",
          element: <FindBreak/>
        },
        {
          path: "/ramazon/:ramazan",
          element: <FindRamazan/>
        },
        {
          path: "/aksiya/:aksiya",
          element: <FindAksiya/>
        },
        {
          path: "/lavash/:lavash",
          element: <LavashLocation/>
        },
        {
          path: "/trindwich/:trindwich",
          element: <TrindwichLocation/>
        },
        {
          path: "/shaurma/:shaurma",
          element: <ShaurmaLocation/>
        },
        {
          path: "/burger/:burger",
          element: <BurgerLocation/>
        },
        {
          path: "/hot-dog/:hotdog",
          element: <HotDogLocation/>
        },
        {
          path: "/kartoshka/:kartoshka",
          element: <KartoshkaLoaction/>
        },
        {
          path: "/sneklar/:snek",
          element: <SnekLocation/>
        },
        {
          path: "/taom/:taom",
          element: <TaomLocation/>
        },
        {
          path: "/combo/:combo",
          element: <ComboLoaction/>
        },
        {
          path: "/setlar-va-juftliklar/:set",
          element: <SetLocation/>
        },
        {
          path: "/desert/:desert",
          element: <DesertLocation/>
        },
        {
          path: "/souslar-va-qushimchalar/:sous",
          element: <QushimchalarLocation/>
        },
        {
          path: "/salat/:salat",
          element: <SalatLocation/>
        },
        {
          path: "/sharbatlar/:sharbatlar",
          element: <SharbatLocation/>
        },
        {
          path: "/ichimliklar/:ichimlik",
          element: <IchimliklarLocation/>
        },
        {
          path: "/choy-va-qahva/:choy",
          element: <ChoyLocation/>
        },
        {
          path: "/menu",
          element: <MainboxFoods/>,
          children: [
            {
              index: true,
              element: <Ramazan/>
            },
            {
              path: "aksiya",
              element: <Aksiyalar/>
            },
            {
              path: "nonushtalar",
              element: <Nonushta/>
            },
            {
              path: "lavash",
              element: <Lavash/>
            },
            {
              path: "trindwich",
              element: <Trindwich/>
            },
            {
              path: "shaurma",
              element: <Shaurma/>
            },
            {
              path: "burger",
              element: <Burger/>
            },
            {
              path: "hot-dog",
              element: <HotDog/>
            },
            {
              path: "kartoshka",
              element: <Kartoshka/>
            },
            {
              path: "sneklar",
              element: <Snek/>
            },
            {
              path: "taom",
              element: <Taom/>
            },
            {
              path: "combo",
              element: <Combo/>
            },
            {
              path: "setlar-va-juftliklar",
              element: <Set/>
            },
            {
              path: "desert",
              element: <Desert/>
            },
            {
              path: "souslar-va-qushimchalar",
              element: <Qushimchalar/>
            },
            {
              path: "salat",
              element: <Salat/>
            },
            {
              path: "sharbatlar",
              element: <Sharbat/>
            },
            {
              path: "ichimliklar",
              element: <Ichimliklar/>
            },
            {
              path: "choy-va-qahva",
              element: <Choy/>
            }
          ]
        },
        {
          path: "*",
          element: <NotFoundChildren/>
        }
      ],
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ]);

  return (
    <div>
      {isLoading && MainLoading}
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
