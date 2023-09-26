import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
    const { id, Picture, Category, Title, Category_bg_Color, Card_bg_Color, Text_and_Button_bg_Color } = donation || {};
  
    const cardBgClass = Card_bg_Color ? `bg-${Card_bg_Color}` : 'bg-white'; 
    const categoryBgClass = Category_bg_Color ? `bg-${Category_bg_Color}` : 'bg-black'; 
    const textAndButtonBgClass = Text_and_Button_bg_Color ? `bg-${Text_and_Button_bg_Color}` : 'bg-white'; 
  
    return (
      <div>
        <Link to={`/donation/${id}`}>
          <div className={`relative flex max-w-[24rem] flex-col rounded-xl ${cardBgClass} bg-clip-border text-gray-700 shadow-md`}>
            <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
              <img src={Picture} className="w-full" />
            </div>
            <div className={`p-6 ${textAndButtonBgClass}`}>
              <div
                data-tooltip="author-2"
                className={`absolute z-50 whitespace-normal break-words rounded-lg py-1.5 px-3 font-sans text-sm font-normal text-primary-clr focus:outline-none ${categoryBgClass}`}>
                {Category}
              </div>
            </div>
            <div className={`flex items-center justify-between p-6 ${textAndButtonBgClass}`}>
              <h4 className="block text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {Title}
              </h4>
            </div>
          </div>
        </Link>
      </div>
    );
  };
  
  export default DonationCard;
  