import DonationCard from "./DonationCard"


const DonationLists = ({donations}) => {

  return (
    <div className='py-10 flex justify-center'>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
        {
                donations?.map(donation=><DonationCard key={donation.id} donation={donation} />)
            }
       </div>
    </div>
  )
}

export default DonationLists
