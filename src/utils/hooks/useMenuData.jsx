import { useEffect, useState } from "react";

export const useMenuData = (item) => {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://bristo-server-ai-abir96.vercel.app/menu")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const filteredItem = result.menuData.filter(
          (r) => r.category === item
        );
        setMenuItems(filteredItem);
        setIsLoading(false);
      });
  }, [item]);

  console.log(menuItems);
  return { menuItems, isLoading };
};
