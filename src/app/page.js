import Navbar from "./components/Navbar/layout"
import MainContent from "./components/MainContent/MainContent"

export default function page() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-[32rem]">
        <div className="w-[32rem] ">

          <Navbar />
          <MainContent />
        </div>
      </div>
    </div>
  )
}