import Swal from "sweetalert2";
import useAuth from "../../../../utils/hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAddCart from "../../../../utils/hooks/useAddCart";

const ItemCard = (props) => {
  const item = props.item;
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const { refetch } = useAddCart();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddtoCart = (item) => {
    console.log(item);
    const orderItem = {
      fooditemId: _id,
      name,
      price,
      email: user.email,
    };
    if (user && user.email) {
      fetch("https://bristo-server-ai-abir96.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);

          if (result.result.insertedId) {
            refetch();
            Swal.fire({
              icon: "success",
              title: "Added to cart",
            });
          }
        });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Please login",
      });
      navigate("/login", { state: { from: location } });
    }
  };
  return (
    <div className="card w-[424px] bg-base-100 shadow-xl">
      <figure className="">
        <img src={image} alt="Shoes" className=" w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={handleAddtoCart}
            className="btn btn-primary uppercase"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
