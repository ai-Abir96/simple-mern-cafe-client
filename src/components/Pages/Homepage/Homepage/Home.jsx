import ChefRecommended from "../ChefRecommended/ChefRecommended";
import AboutCafe from "../AboutCafe/AboutCafe";
import Banner from "../Banner/Banner";
import CallSection from "../CallSection/CallSection";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import OrderSection from "../OrderSection/OrderSection";
import Sponsored from "../Sponsored/Sponsored";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="lg:px-[300px] px-[10px]">
        <OrderSection />
        <AboutCafe />
        <FromOurMenu />
        <CallSection />
        <ChefRecommended />
      </div>
      <Sponsored />
      <div className="lg:px-[300px] px-[10px]">
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
