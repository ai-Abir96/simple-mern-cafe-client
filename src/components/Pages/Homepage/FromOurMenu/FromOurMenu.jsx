import { useEffect, useState } from "react";
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import Items from "../../Shared/Items/Items";

const FromOurMenu = () => {
  const [popularMenu, setPopularMenu] = useState(null);
  useEffect(() => {
    fetch("https://bristo-server-ai-abir96.vercel.app/menu")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const populerItem = result.menuData.filter(
          (item) => item.category === "popular"
        );
        setPopularMenu(populerItem);
      });
  }, []);
  console.log(popularMenu);
  return (
    <div>
      <SectionHeading
        headTop={"Check it out"}
        head={"FROM OUR MENU"}
      />
      <div className="grid grid-cols-2 gap-8">
        {popularMenu &&
          popularMenu.map((item) => (
            <Items key={item._id} item={item} />
          ))}
      </div>
      <div className="text-center">
        <button className="btn border-none border-b-2 mt-12">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default FromOurMenu;
