import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";
import { selectisLoggedIn } from "../../../redux/features/auth/authSlice";
import { getProduct } from "../../../redux/features/product/productSlice";
import { SpinnerImg } from "../../loader/Loader";
import  DOMPurify  from 'dompurify';
import { TiArrowBackOutline } from "react-icons/ti";


const ProductDetail = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();
  const { id } = useParams()

  const isLoggedIn = useSelector(selectisLoggedIn);
  const { product, isLoading, isError, message } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    if (isLoggedIn === true) {
      dispatch(getProduct(id));
    }

    if (isError) {
      console.log(message);
    }
  }, [isLoggedIn, isError, message, dispatch]);

  const stockStatus = (quantity) => {
    if (quantity > 0) {
        return <span style={{color:"green", fontWeight:"800"}}>In Stock</span>
    }
        return <span style={{color:"red", fontWeight:"800"}}>Out of Stock</span>
  }



  return (
    <div>
        <div className="navbar bg-primary-content">
            <div className="flex-1" style={{color:"var(--color-black)", fontSize:"25px", borderBottom:"2px solid var(--color-green)"}}>Product Details: 
            <Link to='/dashboard'>
          <div className="alert p-0 ml-2 mb-1 " style={{borderRadius:"none", fontSize:"20px", background:"var(--color-white)"}}>
            <div className="hover:bg-[var(--color-l-green)] rounded-md p-2">
              <TiArrowBackOutline  style={{color:"var(--color-green)"}}/>
              <span style={{color:"var(--color-black)"}}>Go back</span> 
            </div>
          </div>
          </Link>
            </div> 
        </div>
      {isLoading && <SpinnerImg />}
      {product && (
        <div className="p-5 hero">
            <div className="card w-96 glass shadow-xl">
                <figure className="px-10 pt-10">
                    {product?.image ? (
                    <img
                        src={product.image.filePath}
                        alt={product.image.fileName}
                        className="rounded-xl"
                    />
                    ) : (
                    <p>No image set for this product</p>
                    )}
                </figure>
                <div className="card-body" style={{color:"var(--color-black)", textTransform:"capitalize"}}>
                    <h4>Product Availability: <div className="badge bg-primary-content">{stockStatus(product.quantity)}</div></h4>
                    <hr />
                    <p>
                        <b>Name: </b> &nbsp; {product.name}
                    </p>
                    <p>
                        <b>&rarr; SKU : </b> {product.sku}
                    </p>
                    <p>
                        <b>&rarr; Category : </b> {product.category}
                    </p>
                    <p>
                        <b>&rarr; Price : </b> {"₦"}
                        {product.price}
                    </p>
                    <p>
                        <b>&rarr; Quantity in stock : </b> {product.quantity}
                    </p>
                    <p>
                        <b>&rarr; Total Value in stock : </b> {"₦"}
                        {product.price * product.quantity}
                    </p>
                    <hr />
                    <div
                        dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(product.description),
                        }}
                    ></div>
                    <hr />
                    <p>
                        Created on: {product.createdAt.toLocaleString("en-US")}
                    </p>
                    <p>
                        Last Updated: {product.updatedAt.toLocaleString("en-US")}
                    </p>
                </div>
            </div>
        </div>
      )}
  </div>
);
}

export default ProductDetail