import { Parallax } from "react-parallax";
const MenuSection = ({ image, head, body }) => {
  return (
    <div>
      <Parallax
        strength={-200}
        bgImage={image}
        blur={{ min: -60, max: 60 }}
      >
        <div className="hero h-[800px]">
          <div className="hero-overlay bg-opacity-20"></div>
          <div className="hero-content w-3/4 px-[5%]  py-[145px] mx-auto mt-[240px] mb-[110px] bg-black bg-opacity-40 text-center text-neutral-content">
            <div className="">
              <h1 className="mb-5 text-[45px] font-bold uppercase">
                {head}
              </h1>
              <p className="mb-5 text-2xl font-semibold">{body}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default MenuSection;
