import { useState, useEffect } from "react";
import DonateCard from "./DonateCard";


const Donation = () => {

  const [donationItem, setDonationItem] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donation = JSON.parse(localStorage.getItem('donate'));
    // setDonationItem(donation);

    if (donation) {
      setDonationItem(donation);
    } else {
      setNoFound('No donation found');
      // console.log('no donation found');
    }

  }, []);

  // console.log(donationItem);
  
  return (
    <div>
        {
          noFound ? <div className="text-center text-3xl text-red-500">{noFound}</div> 
          : 
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-10">
             {
                isShow ? donationItem?.map(donation=><DonateCard key={donation.id} donation={donation} />) : donationItem?.slice(0, 4).map(donation=><DonateCard key={donation.id} donation={donation} />)
             }
             </div>
             <div className="text-center"> {/* Center the button horizontally */}
                <button
                  onClick={() => setIsShow(!isShow)}
                  className="w-28 h-12 bg-[#009444] text-white rounded-full hover:bg-[#007f37] focus:outline-none mx-auto block"
                >
                  See All
                </button>
            </div>
          </div>
        }
    </div>
  )
}

export default Donation
