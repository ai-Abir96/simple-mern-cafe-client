import AboutCafe from "../AboutCafe/AboutCafe";
import Banner from "../Banner/Banner";
import FromOurMenu from "../FromOurMenu/FromOurMenu";
import OrderSection from "../OrderSection/OrderSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="lg:px-[300px] px-[10px]">
        <OrderSection />
        <AboutCafe />
        <FromOurMenu />
      </div>
    </div>
  );
};

export default Home;
