import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const OrderSection = () => {
  return (
    <div className=" lg:px-[300px] px-[10px] my-[90px]">
      <div className=" text-center mb-[48px] ">
        <p className=" text-[#D99904] font-normal italic text-xl">
          ---From 11:00am to 10:00pm---
        </p>
        <hr className=" border-t-4 mt-[16px]" />
        <h1 className="my-4 font-normal text-5xl">ORDER ONLINE</h1>
        <hr className=" border-t-4" />
      </div>
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
