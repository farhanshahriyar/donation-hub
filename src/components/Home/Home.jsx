import { useLoaderData } from "react-router-dom"
import Banner from "../../Parts/Banner/Banner"
import DonationLists from "../../Parts/DonationLists/DonationLists"

const Home = () => {
  const donations = useLoaderData()
  // console.log(donation)
return (
    <div>
        
        {/* Banner */}
        <Banner/>
        {/* DonationLists */}
        <DonationLists donations={donations}/>


    </div>
  )
}

export default Home