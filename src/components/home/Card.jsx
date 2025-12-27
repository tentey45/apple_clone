
import "./HeroCard.css";
import heroGif from "../../assests/Home_vdo/largetall.mp4"; // or .gif
import PromoCard from './InfoCard';


export default function Demo() {
    return (
        <div>
            {/* Example 1: Background Image */}
            <PromoCard
                title="Wrapping this special season."
                subtitle="There's still time to make their holiday one of a kind"
                primaryButton="Shop Gift"
                backgroundVideo={heroGif}
                textColor="black"
                overlay={0.1}
                overlayOpacity={0.1}
               
            />


        </div>
    );
}










