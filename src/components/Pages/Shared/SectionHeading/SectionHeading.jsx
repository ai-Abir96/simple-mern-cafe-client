const SectionHeading = ({ headTop, head }) => {
  return (
    <div className=" text-center mb-[48px] ">
      <p className=" text-[#D99904] font-normal italic text-xl">
        ---{headTop}---
      </p>
      <hr className=" border-t-4 mt-[16px] w-1/4 m-auto" />
      <h1 className="my-4 font-normal text-5xl uppercase">{head}</h1>
      <hr className=" border-t-4 w-1/4 m-auto" />
    </div>
  );
};

export default SectionHeading;
