import { useEffect, useState } from "react";

export const useMenuData = (item) => {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/data/menu.json")
      .then((res) => res.json())
      .then((result) => {
        const filteredItem = result.filter(
          (r) => r.category === item
        );
        setMenuItems(filteredItem);
        setIsLoading(false);
      });
  }, [item]);

  if (isLoading) {
    return <div>Laoding ... </div>;
  }
  return menuItems;
};
