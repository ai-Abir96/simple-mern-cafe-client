import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import Rating from "../../Shared/Rating/Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setReviews(result.reviewsData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="my-[130px]">
      <SectionHeading
        headTop={"What Our Reviewers Say"}
        head={"testimonials"}
      />
      <Swiper rewind={true} navigation={true} modules={[Navigation]}>
        {reviews?.map((review) => (
          <div key={review._id}>
            <div className="text-center mb-[53px]">
              <Rating value={review.rating} />
            </div>
            <SwiperSlide key={review._id}>
              <div className=" mb-[40px] text-8xl text-center text-[#151515]">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              <div className=" w-5/6 mx-auto text-center">
                {review.details}
              </div>
              <div className=" text-[32px] text-[#CD9003] font-medium text-center">
                {review.name}
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
