import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import { Toaster } from "react-hot-toast"


const Root = () => {
  return (
    <div className="max-w-[1550px] mx-auto">
      <Toaster/>
        <Header/>
        <div className="py-10">
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Root
