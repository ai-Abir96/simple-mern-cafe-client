import useAddCart from "../../../../../utils/hooks/useAddCart";
import CartItems from "../CartItems/CartItems";

const MyCart = () => {
  const { cart } = useAddCart();
  console.log(cart);
  const totalPrice = cart?.cartData
    ?.reduce((sum, item) => {
      console.log(item.price);
      return item.price + sum;
    }, 0)
    .toFixed(2);

  return (
    <div className=" w-full overflow-auto">
      <div className=" text-center my-5 text-5xl">My Cart</div>
      <div className=" grid grid-cols-3 gap-4">
        <h3 className=" text-3xl">
          Total Items: {cart?.cartData?.length}
        </h3>
        <h3 className=" text-3xl">Total Price: {totalPrice}</h3>
        <button className=" btn btn-primary">Pay</button>
      </div>
      <div className="">
        <CartItems />
      </div>
    </div>
  );
};

export default MyCart;
