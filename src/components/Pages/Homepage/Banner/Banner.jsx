import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./banner.css";
const Banner = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        showArrows={true}
        showThumbs={true}
        thumbWidth={100}
        width={"100%"}
      >
        <div>
          <img src="/images/Carousel/01.jpg" />
        </div>
        <div>
          <img src="/images/Carousel/02.jpg" />
        </div>
        <div>
          <img src="/images/Carousel/03.png" />
        </div>
        <div>
          <img src="/images/Carousel/04.jpg" />
        </div>
        <div>
          <img src="/images/Carousel/05.png" />
        </div>
        <div>
          <img src="/images/Carousel/06.png" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
