import { useEffect, useState } from "react";
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import { SwiperSlide, Swiper } from "swiper/react";

const ChefRecommended = () => {
  const [offeredItem, setOfferedItem] = useState(null);
  useEffect(() => {
    fetch("/data/menu.json")
      .then((res) => res.json())
      .then((result) => {
        const offered = result.filter(
          (item) => item.category === "offered"
        );
        setOfferedItem(offered);
      });
  }, []);
  return (
    <div className=" mt-[130px]">
      <SectionHeading
        headTop={"Should Try"}
        head={"Chef Recommends"}
      />

      <Swiper
        slidesPerView={1}
        scrollbar={{
          hide: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {offeredItem &&
          offeredItem.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure className="w-full h-48 pt-10">
                  <img
                    src={item.image}
                    className="rounded-xl 
                "
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{item.name}</h2>
                  <p>{item.recipe}</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ChefRecommended;
