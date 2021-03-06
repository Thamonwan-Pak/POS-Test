import React from "react";
import { useParams } from "react-router-dom";

const MenuItem = ({ data }) => {
  const { menuName } = useParams();
  const menu = data.find(m => m.id === Number(memuId));
  let menuData;

  if (menu) {
    menuData = (
      <div>
        <h3> {product.name} </h3>
        <p>{product.description}</p>
        <hr />
        <h4>{product.status}</h4>
      </div>
    );
  } else {
    menuData = <h2> Sorry. Product doesn't exist </h2>;
  }

  return (
    <div>
      <div>{menuData}</div>
    </div>
  );
};

export default MenuItem;