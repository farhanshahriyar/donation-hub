import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Typography } from "@material-tailwind/react";
import toast from 'react-hot-toast';

const DonationDetails = () => {
  const [donation, setDonation] = useState(null);
  const { id } = useParams();
  const donations = useLoaderData();

  // const handleAddToDonation = () => {
  //   // console.log(donation)
  //   // localStorage.setItem('donation korechi', "tested");
  //   // localStorage.setItem('donation', JSON.stringify(donation));
    
  //   const addeedDonationsArray = [];
  //   const donationItem = JSON.parse(localStorage.getItem('donate'));

  //   if (donationItem) {
  //     addeedDonationsArray.push(donation);
  //     localStorage.setItem('donate', JSON.stringify(addeedDonationsArray));
  //   }

  // }

  const handleAddToDonation = () => {
    // Get the existing donations from local storage or initialize an empty array
    const existingDonations = JSON.parse(localStorage.getItem('donate')) || [];
  
    // Check if the donation is already added (based on the donation id)
    const isDonationAlreadyAdded = existingDonations.some(d => d.id === donation.id);
  
    if (isDonationAlreadyAdded) {
      // Display a toast or message indicating that the donation is already added
      toast.error('This donation is already in list.');
    } else {
      // Add the new donation to the existing donations array
      existingDonations.push(donation);
  
      // Save the updated donations array back to local storage
      localStorage.setItem('donate', JSON.stringify(existingDonations));
  
      // Display a success message
      toast.success('Donation added successfully.');
    }
  };
  

  useEffect(() => {
    const findDonation = donations.find(donation => donation.id === id);
    if (findDonation) {
      setDonation(findDonation);
    }
  }, [id, donations]);

  if (!donation) {
    return <div>Loading...</div>; // display a loading message while fetching data.
  }

  return (
    <div>
      <figure className="relative h-[700px] w-full">
        <img
          className="h-[700px] w-full rounded-lg object-cover object-center"
          src={donation.BG}
          alt={donation.Title}
        />
        <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between bg-[#0B0B0B] py-4 px-6">
          <div>
          <button onClick={handleAddToDonation}
             className="sm:w-full lg:w-auto my-2 rounded md py-4 px-8 text-center bg-btn-primary-clr text-white hover:bg-indigo-700">
                        Donation: {donation.Price}</button>

          </div>
        </figcaption>
      </figure>

      <div className='py-10'>
        <h1 className='font-bold text-4xl text-primary-clr'>{donation.Title}</h1>
        <p className='font-normal text-[16px] text-secondary-clr py-5'>{donation.Description}</p>
      </div>
    </div>
  );
};

export default DonationDetails;

