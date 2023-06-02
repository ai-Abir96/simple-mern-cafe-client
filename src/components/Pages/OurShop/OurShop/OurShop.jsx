import SharedBanner from "../../Shared/Banner/SharedBanner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useMenuData } from "../../../../utils/hooks/useMenuData";
import ItemCard from "../../Shared/ItemCard/ItemCard";
import "./ourshop.css";
import { useState } from "react";
import Pagination from "../../Shared/Pagination/Pagination";
const OurShop = () => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState({
    salad: 1,
    pizza: 1,
    soup: 1,
    dessert: 1,
    drink: 1,
  });

  const handlePageChange = (category, pageNumber) => {
    setCurrentPage((prevPage) => ({
      ...prevPage,
      [category]: pageNumber,
    }));
    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  const handleCategoryChange = (category) => {
    setCurrentPage((prevPage) => ({
      ...prevPage,
      [category]: 1,
    }));
  };

  const saladItems = useMenuData("salad");
  const pizzaItems = useMenuData("pizza");
  const soupItems = useMenuData("soup");
  const dessertItems = useMenuData("dessert");
  const drinkItems = useMenuData("drink");

  const imageURL = "/images/shop/banner2.jpg";
  const heading = "Our shop";
  const description = "Would you like to try a dish?";

  const tabData = (items, currentPage, category) => {
    const startIndex = (currentPage[category] - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = items.slice(startIndex, endIndex);

    return (
      <div>
        <div className="grid grid-cols-3 gap-10">
          {currentPageData.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
        <div className=" text-center ">
          {items.length > itemsPerPage && (
            <Pagination
              currentPage={currentPage[category]}
              totalPages={Math.ceil(items.length / itemsPerPage)}
              onPageChange={(pageNumber) =>
                handlePageChange(category, pageNumber)
              }
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <SharedBanner
        imageURL={imageURL}
        head={heading}
        description={description}
      />
      <div className="my-[130px] mx-[300px]">
        <Tabs>
          <TabList>
            <Tab onClick={() => handleCategoryChange("salad")}>
              <span className="uppercase">salad</span>
            </Tab>
            <Tab onClick={() => handleCategoryChange("pizza")}>
              <span className="uppercase">pizza</span>
            </Tab>
            <Tab onClick={() => handleCategoryChange("soup")}>
              <span className="uppercase">soups</span>
            </Tab>
            <Tab onClick={() => handleCategoryChange("dessert")}>
              <span className="uppercase">desserts</span>
            </Tab>
            <Tab onClick={() => handleCategoryChange("drink")}>
              <span className="uppercase">drinks</span>
            </Tab>
          </TabList>
          <TabPanel>
            {tabData(saladItems.menuItems, currentPage, "salad")}
          </TabPanel>
          <TabPanel>
            {tabData(pizzaItems.menuItems, currentPage, "pizza")}
          </TabPanel>
          <TabPanel>
            {tabData(soupItems.menuItems, currentPage, "soup")}
          </TabPanel>
          <TabPanel>
            {tabData(dessertItems.menuItems, currentPage, "dessert")}
          </TabPanel>
          <TabPanel>
            {tabData(drinkItems.menuItems, currentPage, "drink")}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
