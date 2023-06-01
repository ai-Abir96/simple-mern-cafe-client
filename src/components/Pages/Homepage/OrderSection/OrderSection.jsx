import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
const OrderSection = () => {
  return (
    <div className="  my-[90px]">
      <SectionHeading
        headTop={"From 11:00am to 10:00pm"}
        head={"ORDER ONLINE"}
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        <SwiperSlide>
          <div className="slide-content text-center flex flex-col items-center">
            <img
              src="/images/order-section/slide1.jpg"
              alt=""
              className="w-full "
            />
            <h2 className=" text-3xl font-normal -mt-16  mb-4  text-white">
              SALADS
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content text-center flex flex-col items-center">
            <img
              src="/images/order-section/slide2.jpg"
              alt=""
              className="w-full "
            />
            <h2 className=" text-3xl font-normal -mt-16 mb-4   text-white">
              SOUPS
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content text-center flex flex-col items-center">
            <img
              src="/images/order-section/slide3.jpg"
              alt=""
              className="w-full "
            />
            <h2 className=" text-3xl font-normal -mt-16 mb-4   text-white">
              PIZZAS
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content text-center flex flex-col items-center">
            <img
              src="/images/order-section/slide4.jpg"
              alt=""
              className="w-full "
            />
            <h2 className=" text-3xl font-normal -mt-16 mb-4   text-white">
              DESSERTS
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderSection;
