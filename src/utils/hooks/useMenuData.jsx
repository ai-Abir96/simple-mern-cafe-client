import { useEffect, useState } from "react";

export const useMenuData = (item) => {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((result) => {
        const filteredItem = result.menuData.filter(
          (r) => r.category === item
        );
        setMenuItems(filteredItem);
        setIsLoading(false);
      });
  }, [item]);

  return { menuItems, isLoading };
};
