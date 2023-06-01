import SectionHeading from "../../Shared/SectionHeading/SectionHeading";

const Sponsored = () => {
  return (
    <div className="relative bg-fixed overflow-hidden bg-[url('/images/sponsored/featured.jpg')] bg-no-repeat bg-cover shadow-lg h-[848px] mt-[130px]">
      <div
        className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden bg-fixed"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <div className=" pt-[130px] text-white">
          <SectionHeading
            head={"From Our menu"}
            headTop={"Check it out"}
          />
        </div>

        <div className=" lg:px-[300px] px-[10px]">
          <div className="pt-5 flex items-center  justify-center">
            <div className="w-full mr-10">
              <img
                src="/images/sponsored/featured.jpg"
                className=" rounded "
                alt=""
              />
            </div>
            <div className=" text-white">
              <h3 className=" text-2xl">
                March 20, 2023
                <br />
                WHERE CAN I GET SOME?
              </h3>
              <p className=" text-lg pt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Error voluptate facere, deserunt dolores maiores
                quod nobis quas quasi. Eaque repellat recusandae ad
                laudantium tempore consequatur consequuntur omnis
                ullam maxime tenetur.
              </p>
              <button className=" mt-5">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
