import Swal from "sweetalert2";
import useAddCart from "../../../../utils/hooks/useAddCart";

const CartItems = () => {
  const { cart, refetch } = useAddCart();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://bristo-server-ai-abir96.vercel.app/cart/${id}`,
          { method: "DELETE" }
        )
          .then((res) => res.json())
          .then((result) => {
            if (result.result.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto overflow-y-auto w-full">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart?.cartData?.map((cd) => (
            <tr key={cd._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <img src={cd.image} alt="Food" />
              </td>
              <td>
                <div className="font-bold">{cd.name}</div>
              </td>
              <td>
                <div className="font-bold">{cd.price}</div>
              </td>

              <th>
                <button
                  onClick={() => handleDelete(cd._id)}
                  className="btn btn-error btn-square "
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartItems;
