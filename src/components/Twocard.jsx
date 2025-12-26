import CardGrid from "./CardGrid"
import InfoCard from "./InfoCard"
import IPadAir from "../assests/Hero_Sec_Img/hero_ipad_air_avail__c34ycq52exg2_largetall_2x.jpg"
import Watch from "../assests/Hero_Sec_Img/watch.jpg"
import Ipad from "../assests/Hero_Sec_Img/ipad-new.jpg"
import IPhone from "../assests/Hero_Sec_Img/iPhone.jpg"
import Card from "../assests/Hero_Sec_Img/card.jpg"
import Icon from "../assests/Home_logo_img/promo_logo_ipadair__frwnnsqveeye_large_2x.png"
import Watchlogo from "../assests/Home_logo_img/promo_logo_apple_watch_series_11__d9br21pxygya_large_2x.png"
import Gift from "../assests/Hero_Sec_Img/promo_apple_gift_card__etkqjveoh4uq_large.jpg"
import TradeIn from "../assests/Hero_Sec_Img/icase.jpg"
import TradeInlogo from "../assests/Home_logo_img/promo_logo_iphone_tradein__7y3gtai5az66_large.png"
export default function Twocard() {
  const cardData = [
 
    {
      titleImage: "https://www.apple.com/v/home/ck/images/logos/ipad-air/promo_logo_ipadair__frwnnsqveeye_medium_2x.png",
      subtitle: "The world's best in-ear Active Noise Cancellation.",
      primaryButton: "Learn more",
       secondaryButton: "Buy",
      backgroundImage: IPadAir,
      textColor: "black",
      
 
    },
     {
      titleImage:  "https://www.apple.com/v/home/ck/images/logos/apple-watch-series-11/promo_logo_apple_watch_series_11__d9br21pxygya_small_2x.png",
      subtitle: "Now supercharged by the M3 chip.",
    primaryButton: "Learn more",
       secondaryButton: "Buy",
      backgroundImage: Watch,
      textColor: "black",
 
    },
     {
      title: "iPad",
      subtitle: "Now with the speed of the A16 chip and double the starting storage",
          primaryButton: "Learn more",
       secondaryButton: "Buy",
      backgroundImage: Ipad,
      textColor: "black",
 
    },
     {
      title: "Apple Gift Card",
      subtitle: "Let them spend the holidays however they like",
          primaryButton: "Learn more",
       secondaryButton: "Buy",
      backgroundImage: Gift,
      textColor: "black",
 
    },
     {
      titleImage: "https://www.apple.com/v/home/ck/images/logos/iphone-tradein/promo_logo_iphone_tradein__7y3gtai5az66_small_2x.png",
      subtitle: "Get up to $180-$670 in credit when you trade in iPhone 13 or higher.",
         primaryButton: "Learn more",
       secondaryButton: "Buy",
      backgroundImage: TradeIn,
      textColor: "black",
 
    },
     {
      titleImage: "https://www.apple.com/v/home/ck/images/logos/apple-card/logo__dcojfwkzna2q_small_2x.png",
      subtitle: "Get up to 30% Daily Cash back with every purchase.",
       primaryButton: "Learn more",
       secondaryButton: "Buy",
      backgroundImage: Card,
      textColor: "black",
 
    },

  ];

  return (
    <div>
      <CardGrid cards={cardData} />
    </div>
  );
}