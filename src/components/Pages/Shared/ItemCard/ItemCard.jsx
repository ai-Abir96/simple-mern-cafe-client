const ItemCard = (props) => {
  const item = props.item;
  return (
    <div className="card w-[424px] bg-base-100 shadow-xl">
      <figure className="">
        <img src={item.image} alt="Shoes" className=" w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item.name}</h2>
        <p>{item.recipe}</p>
        <div className="card-actions">
          <button className="btn btn-primary uppercase">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
