import React from 'react';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BsCart4, BsCartX } from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';
import InfoBox from '../../infoBox/InfoBox';

//icons
const earningIcon = <AiFillDollarCircle size={40} color="var(--color-green)" />
const productIcon = <BsCart4 size={40} color="var(--color-green)" />
const categoryIcon = <BsCartX size={40} color="var(--color-green)" />
const outOfStockIcon = <BiCategory size={40} color="var(--color-green)" />

const ProductSummary = (products) => {
  return (
    <div>
      <h3>Inventory Stats</h3>
      <div>
        <InfoBox icon={productIcon} 
        title={"Total Products"} 
        count={products.lenght} 
        />

        <InfoBox icon={earningIcon} 
        title={"Total store value"} 
        count={"0"} 
        />

        <InfoBox icon={outOfStockIcon} 
        title={"Out of stock"} 
        count={"0"} 
        />

        <InfoBox icon={categoryIcon} 
        title={"All category"} 
        count={"0"} 
        />

      </div>
    </div>
  )
}

export default ProductSummary