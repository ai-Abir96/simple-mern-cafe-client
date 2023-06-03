import Items from "../../Shared/Items/Items";
import { useMenuData } from "../../../../utils/hooks/useMenuData";
import MenuSection from "../MenuSection/MenuSection";
import DessertImg from "/images/menu/dessert-bg.jpeg";
import PizzaImg from "/images/menu/pizza-bg.jpg";
import SaladImg from "/images/menu/salad-bg.jpg";
import SoupImg from "/images/menu/soup-bg.jpg";
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import SharedBanner from "../../Shared/Banner/SharedBanner";
import { Link } from "react-router-dom";
const MenuPage = () => {
  const popularItems = useMenuData("popular");
  const dessertItems = useMenuData("dessert");
  const pizzaItems = useMenuData("pizza");
  const saladItems = useMenuData("salad");
  const soupItems = useMenuData("soup");
  const imageURL = "/images/menu/banner3.jpg";
  const heading = "Our Menu";
  const description = "Would you like to try a dish?";
  return (
    <div>
      <SharedBanner
        imageURL={imageURL}
        head={heading}
        description={description}
      />

      <div className=" mt-[130px] px-[300px]">
        <SectionHeading
          headTop={"Don't Miss"}
          head={"today's offer"}
        />
        <div className="grid grid-cols-2 gap-10">
          {popularItems.menuItems &&
            popularItems.menuItems.map((item) => (
              <Items key={item._id} item={item} />
            ))}
        </div>
        <div className="my-[45px] text-center">
          <Link to={`/shop`}>
            <button className="  uppercase">
              Order Your Favourite Food
            </button>
          </Link>
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
          {dessertItems.menuItems &&
            dessertItems.menuItems.map((item) => (
              <Items key={item._id} item={item} />
            ))}
        </div>
        <div className="my-[45px] text-center">
          <Link to={`/shop`}>
            <button className="  uppercase">
              Order Your Favourite Food
            </button>
          </Link>
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
          {pizzaItems.menuItems &&
            pizzaItems.menuItems.map((item) => (
              <Items key={item._id} item={item} />
            ))}
        </div>
        <div className="my-[45px] text-center">
          <Link to={`/shop`}>
            <button className="  uppercase">
              Order Your Favourite Food
            </button>
          </Link>
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
          {saladItems.menuItems &&
            saladItems.menuItems.map((item) => (
              <Items key={item._id} item={item} />
            ))}
        </div>
        <div className="my-[45px] text-center">
          <Link to={`/shop`}>
            <button className="  uppercase">
              Order Your Favourite Food
            </button>
          </Link>
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
          {soupItems.menuItems &&
            soupItems.menuItems.map((item) => (
              <Items key={item._id} item={item} />
            ))}
        </div>
        <div className="my-[45px] text-center">
          <Link to={`/shop`}>
            <button className="  uppercase">
              Order Your Favourite Food
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
