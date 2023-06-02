const MenuBanner = () => {
  return (
    <div>
      <div className="hero  bg-[url('/images/menu/banner3.jpg')] h-[800px]">
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content px-[400px] py-[145px] mx-[300px] mt-[240px] mb-[110px] bg-black bg-opacity-40 text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-[88px] font-bold uppercase">
              Our Menu
            </h1>
            <p className="mb-5 text-2xl font-semibold">
              Would you like to try a dish?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBanner;
