import CardGrid from "./CardGrid"
import InfoCard from "./InfoCard"
import AirPod from "../assests/Hero_Sec_Img/airpods.jpg"
import Watch from "../assests/Hero_Sec_Img/watch.jpg"
import Ipad from "../assests/Hero_Sec_Img/ipad-new.jpg"
import IPhone from "../assests/Hero_Sec_Img/iPhone.jpg"
import Card from "../assests/Hero_Sec_Img/card.jpg"
import Apple from "../assests/Home_logo_img/applelogo.png"

        import { AppleIcon } from "lucide-react"
export default function Twocard() {
  const cardData = [
 
    {
      title: "Apple Watch",
      subtitle: "Smarter. Brighter.",
      primaryButton: "Buy",
      
      backgroundImage: AirPod,
      textColor: "black",
      overlay: true
    },
     {
      title:  "Watch",
      subtitle: "Smarter. Brighter.",
      primaryButton: "Buy",
      backgroundImage: Watch,
      textColor: "black",
      overlay: true
    },
     {
      title: "Apple Watch",
      subtitle: "Smarter. Brighter.",
      primaryButton: "Buy",
      backgroundImage: Ipad,
      textColor: "black",
      overlay: true
    },
     {
      title: "Apple Watch",
      subtitle: "Smarter. Brighter.",
      primaryButton: "Buy",
      backgroundImage: Ipad,
      textColor: "black",
      overlay: true
    },
     {
      title: "Apple Watch",
      subtitle: "Smarter. Brighter.",
      primaryButton: "Buy",
      backgroundImage: IPhone,
      textColor: "black",
      overlay: true
    },
     {
      title: "Apple Watch",
      subtitle: "Smarter. Brighter.",
      primaryButton: "Buy",
      backgroundImage: Card,
      textColor: "black",
      overlay: true
    },

  ];

  return (
    <div>
      <CardGrid cards={cardData} />
    </div>
  );
}