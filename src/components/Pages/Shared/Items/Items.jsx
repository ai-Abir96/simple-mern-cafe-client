const Items = (props) => {
  const item = props.item;
  return (
    <div className="flex">
      <div className="mr-2">
        <img
          src={item.image}
          className=" w-[118px] h-[104px]"
          style={{ borderRadius: "0px 200px 200px 200px" }}
          alt=""
        />
      </div>
      <div className="pl-8 mr-2">
        <h3 className="uppercase text-xl">
          {item.name} --------------------------------
        </h3>
        <p className=" text-base">{item.recipe}</p>
      </div>
      <div className=" text-xl text-[#BB8506]">${item.price}</div>
    </div>
  );
};

export default Items;
