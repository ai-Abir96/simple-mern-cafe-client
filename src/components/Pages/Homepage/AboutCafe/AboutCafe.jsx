const AboutCafe = () => {
  return (
    <div className="mb-24">
      <div className="relative">
        <img
          className="h-[572px]"
          src="/images/about-us/chef-service.jpg"
          alt=""
        />
        <div className=" absolute  inset-0 flex justify-center  items-center">
          <div className=" bg-white h-3/5 w-4/5 px-44 py-24 ">
            <h1 className="text-center pb-5">Bristo Boss</h1>
            <p className="text-dark text-center">
              Welcome to Bristo Boss, your ultimate destination for a
              wide range of culinary delights. We pride ourselves on
              offering a comprehensive menu that caters to all tastes
              and preferences. Whether youre craving savory classics,
              exotic flavors, or delectable desserts, we have
              something to satisfy every palate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCafe;
