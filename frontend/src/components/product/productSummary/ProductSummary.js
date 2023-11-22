import React, { useEffect } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsCart4, BsCartX } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import InfoBox from "../../infoBox/InfoBox";
import styled from "../../../styles.module.css";

import { useDispatch, useSelector } from "react-redux";
import {
  CALC_CATEGORY,
  CALC_OUTOFSTOCK,
  CALC_STORE_VALUE,
  selectCategory,
  selectOutOfStock,
  selectTotalStoreValue,
} from "../../../redux/features/product/productSlice";

// Icons
const earningIcon = <AiFillDollarCircle color="var(--color-green)" />;
const productIcon = <BsCart4 color="blue" />;
const categoryIcon = <BiCategory color="purple" />;
const outOfStockIcon = <BsCartX color="red" />;

// Format Amount
export const formatNumbers = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ProductSummary = ({ products }) => {
  const dispatch = useDispatch();
  const totalStoreValue = useSelector(selectTotalStoreValue);
  const outOfStock = useSelector(selectOutOfStock);
  const category = useSelector(selectCategory);

  useEffect(() => {
    dispatch(CALC_STORE_VALUE(products));
    dispatch(CALC_OUTOFSTOCK(products));
    dispatch(CALC_CATEGORY(products));
  }, [dispatch, products]);

  return (
    <div>
      <div className="navbar bg-primary-content hero">
        <div
          className="flex-1"
          style={{ color: "var(--color-black)", fontSize: "25px" }}
        >
          Inventory Stats:
        </div>
      </div>
      <div className={`${styled.columnBox} gap-2 p-2`}>
        <InfoBox
          icon={categoryIcon}
          title={"All Category"}
          count={category.length}
        />

        <InfoBox
          icon={productIcon}
          title={"Total Products"}
          count={products.length}
        />

        <InfoBox
          icon={outOfStockIcon}
          title={"Out of Stock"}
          count={outOfStock}
        />

        <InfoBox
          icon={earningIcon}
          title={"Total Store Value"}
          count={`₦ ${formatNumbers(totalStoreValue.toFixed(2))}  `}
        />
      </div>
    </div>
  );
};

export default ProductSummary;
