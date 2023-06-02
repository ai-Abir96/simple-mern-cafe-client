import Items from "../../Shared/Items/Items";
import { useMenuData } from "../../../../utils/hooks/useMenuData";
import MenuBanner from "../Banner/MenuBanner";
import MenuSection from "../MenuSection/MenuSection";
import DessertImg from "/images/menu/dessert-bg.jpeg";
import PizzaImg from "/images/menu/pizza-bg.jpg";
import SaladImg from "/images/menu/salad-bg.jpg";
import SoupImg from "/images/menu/soup-bg.jpg";
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
const MenuPage = () => {
  const popularItems = useMenuData("popular");
  const dessertItems = useMenuData("dessert");
  const pizzaItems = useMenuData("pizza");
  const saladItems = useMenuData("salad");
  const soupItems = useMenuData("soup");

  return (
    <div>
      <MenuBanner />

      <div className=" mt-[130px] px-[300px]">
        <SectionHeading
          headTop={"Don't Miss"}
          head={"today's offer"}
        />
        <div className="grid grid-cols-2 gap-10">
          {popularItems &&
            popularItems.map((item) => (
              <Items key={item._id} item={item} />
            ))}
        </div>
        <div className="my-[45px] text-center">
          <button className="  uppercase">
            Order Your Favourite Food
          </button>
        </div>
      </div>
      <MenuSection
        image={DessertImg}
        head={"Dessert"}
        body={
          "Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className=" mt-[130px] px-[300px]">
        <div className="grid grid-cols-2 gap-10">
          {dessertItems &&
            dessertItems.map((item) => (
              <Items key={item._id} item={item} />
            ))}
        </div>
        <div className="my-[45px] text-center">
          <button className="  uppercase">
            Order Your Favourite Food
          </button>
        </div>
      </div>
      <MenuSection
        image={PizzaImg}
        head={"Pizza"}
        body={
          "Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className=" mt-[130px] px-[300px]">
        <div className="grid grid-cols-2 gap-10">
          {pizzaItems &&
            pizzaItems.map((item) => (
              <Items key={item._id} item={item} />
            ))}
        </div>
        <div className="my-[45px] text-center">
          <button className="  uppercase">
            Order Your Favourite Food
          </button>
        </div>
      </div>
      <MenuSection
        image={SaladImg}
        head={"Salad"}
        body={
          "Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className=" mt-[130px] px-[300px]">
        <div className="grid grid-cols-2 gap-10">
          {saladItems &&
            saladItems.map((item) => (
              <Items key={item._id} item={item} />
            ))}
        </div>
        <div className="my-[45px] text-center">
          <button className="  uppercase">
            Order Your Favourite Food
          </button>
        </div>
      </div>
      <MenuSection
        image={SoupImg}
        head={"Soup"}
        body={
          "Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      <div className=" mt-[130px] px-[300px]">
        <div className="grid grid-cols-2 gap-10">
          {soupItems &&
            soupItems.map((item) => (
              <Items key={item._id} item={item} />
            ))}
        </div>
        <div className="my-[45px] text-center">
          <button className="  uppercase">
            Order Your Favourite Food
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;