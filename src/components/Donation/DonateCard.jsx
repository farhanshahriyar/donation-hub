import React from 'react'
import { Link } from 'react-router-dom';

const DonateCard = ({donation}) => {
    const { id, Picture, Category, Title, Category_bg_Color, Card_bg_Color, Text_and_Button_bg_Color, Price } = donation || {};

  return (
    <div>
       <div
            className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div
              className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src={Picture} className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <h6
                className="mb-4 block text-sm font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                {Category}
              </h6>
              <h4
                className="mb-2 block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {Title}
              </h4>
              <p className="mb-8 block text-base font-semibold leading-relaxed text-gray-700 antialiased">
                {Price}
              </p>
              <a className="inline-block">
                <Link to={`/donation/${id}`}>
                    <button
                    className="flex select-none items-center gap-2 rounded-lg py-4 px-6 text-center align-middle text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button">
                    View Details
                    </button>
                </Link>
              </a>
            </div>
          </div>
          {/* Donate Card Clicked */}
    </div>
  )
}

export default DonateCard
