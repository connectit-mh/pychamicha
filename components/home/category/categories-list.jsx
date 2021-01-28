import React from "react";
import Category from "./category";

const CategoriesList = ({ menu }) => {
  return (
    <div className="flex categories-list">
      {menu.map((x) => {
        return <Category key={x.name} img={x.mini_img} name={x.name} />;
      })}
    </div>
  );
};
export default CategoriesList;
