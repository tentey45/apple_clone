import "./HeroCard.css";
import IPhone from "../assests/Hero_Sec_Img/iPhone.jpg";
import PromoCard from './InfoCard';


export default function Demo() {
    return (
        <div style={{paddingTop: "20px"}}>

           
            {/* Example 1: Background Image */}
            <PromoCard
                title="iPhone"
                subtitle="There's still time to make their holiday one of a kind"
                primaryButton="Learn more"
                secondaryButton="Shop Iphone"
                backgroundImage={IPhone}
                textColor="black"
                overlay={0.1}
                overlayOpacity={0.1}     
            />

        </div>

        
    );
}










