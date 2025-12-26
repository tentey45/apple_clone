import Airpod from "../assests/Hero_Sec_Img/airpods.jpg"; //
import PromoCard from './InfoCard';

export default function Demo() {
    return (
        <div style={{paddingTop: "20px"}}>

           
      
             {/* Example 1: Background Image */}
            <PromoCard
                title="iPad"
                subtitle="There's still time to make their holiday one of a kind"
                primaryButton="Learn more"
                secondaryButton="Shop Iphone"
                backgroundImage={Airpod}
                textColor="black"
                overlay={0.1}
                overlayOpacity={0.1}     
            />
        </div>

        
    );
}