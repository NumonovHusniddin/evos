import MainboxBestSellers from "./MainboxBestSellers/MainboxBestSellers"
import MainboxFirstPage from "./MainboxFirstPage/MainboxFirstPage"
import NewFoods from "./MainboxFoods/NewFoods/NewFoods"


function Mainbox() {
  return (
    <>
      <MainboxFirstPage/>
      <MainboxBestSellers/>
      <NewFoods/>
    </>
  )
}

export default Mainbox