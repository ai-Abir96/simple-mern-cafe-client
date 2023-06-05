import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../../utils/hooks/useAxiosSecure";
import Swal from "sweetalert2";
const imageHostingKey = import.meta.env.VITE_IMAGE_API_KEY;
const AddItems = () => {
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
  const { axiosSecure } = useAxiosSecure();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const foodItemSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (imageRes) => {
        if (imageRes.success) {
          const imageURL = imageRes.data.display_url;

          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imageURL,
          };

          const res = await axiosSecure.post(
            "/admin/menu/addItem",
            newItem
          );
          console.log(res.data);
          if (res.data.result.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully Added the itme",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      });
    console.log(data);
  };
  return (
    <div className=" w-3/4">
      <SectionHeading
        head={"Add an Item"}
        headTop={"What's new?"}
      ></SectionHeading>
      <form
        onSubmit={handleSubmit(foodItemSubmit)}
        className=" border border-sky-400 bg-[#F3F3F3]"
      >
        <div className="mx- 4">
          <div>
            <span> Recipe Name* </span>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe Name"
              className="input  w-full "
            />
          </div>
          <div className="flex w-full">
            <div className="flex flex-col w-1/2">
              <span> Category* </span>
              <select
                {...register("category", { required: true })}
                className="select  w-full max-w-xs"
                defaultValue="Category"
              >
                <option disabled>Category</option>
                <option>Pizza</option>
                <option>Salad</option>
                <option>Soup</option>
                <option>Dessert</option>
                <option>Drinks</option>
              </select>
            </div>
            <div className="w-1/2 ml-5 flex flex-col">
              <span> Price* </span>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input  w-full max-w-xs"
              />
            </div>
          </div>
          <div>
            <span>Recipe Details* </span>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea  w-full"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div className=" flex flex-col">
            <span>Image*</span>
            <input
              type="file"
              placeholder="Image"
              {...register("image", { required: true })}
              className="file-input w-full max-w-xs"
            />
          </div>
        </div>
        <div className=" text-right">
          <button className="btn btn-primary" type="submit">
            {" "}
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItems;
