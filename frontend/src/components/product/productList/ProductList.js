import React, {useEffect, useState} from 'react'
import { SpinnerImg } from '../../loader/Loader';
import "./productList.scss";
import ReactPaginate from 'react-paginate';
import { FaEdit, FaTrashAlt } from "react-icons/fa"
import { AiOutlineEye } from "react-icons/ai"
import Search from '../../search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { FILTER_PRODUCTS, selectFilteredProducts } from '../../../redux/features/product/filterSlice';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { deleteProduct, getProducts, } from "../../../redux/features/product/productSlice";
import { Link } from 'react-router-dom';



const ProductList = ({ products, isLoading }) => {
  const [search, setSearch] = useState("")
  const filteredProducts = useSelector(selectFilteredProducts)
  const dispatch = useDispatch()

  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };
  
  const delProduct = async (id) => {
    await dispatch(deleteProduct(id));
    await dispatch(getProducts());
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Delete Product",
      message: "Are you sure you want to delete this product.",
      buttons: [
        {
          label: "Delete",
          onClick: () => delProduct(id),
        },
        {
          label: "Cancel",
          // onClick: () => alert('Click No')
        },
      ],
    });
  };

  //begin pagination

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredProducts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    setItemOffset(newOffset);
  };

  //end pagination

  useEffect(() => {
    dispatch(FILTER_PRODUCTS({products, search}))
  }, [products, search, dispatch])

  return (
    <div className='productTable'>
      <div className="navbar bg-primary-content mt-5">
        <div className="flex-1" style={{color:"var(--color-black)", fontSize:"25px"}}>Inventory Items</div>
        <div className="flex-none"><Search value={search} onChange={(e) => setSearch(e.target.value)}/></div>  
      </div>

      {isLoading && <SpinnerImg />}

      <div className="overflow-x-auto p-8 pt-3">
      {!isLoading && products.length === 0 ? (
            <p className='noProduct'>-- No product found, please add a product...</p>
          ) : (
          <table className="table w-full" style={{borderRadius:"10px", color:"var(--color-black)"}}>
          <thead className='head'>
            <tr>
              <th>s/n</th> 
              <th>Name</th> 
              <th>Category</th> 
              <th>Price</th> 
              <th>Quantity</th> 
              <th>Value</th> 
              <th>Action</th>
            </tr>
          </thead> 
          <tbody className='tdata '>
            {currentItems.map((product, index) =>{
                const {
                  _id, name, category, price, quantity
                } = product
                return (
                  <tr key={_id} className="btn-ghost">
                    <th>{index + 1}</th> 
                    <td>{shortenText (name, 16)}</td> 
                    <td>{category}</td> 
                    <td>{"₦"}{price}</td> 
                    <td>{quantity}</td> 
                    <td>{"₦"}{price * quantity}</td> 
                    <td>
                        <div className="avatar icons">
                          <Link to={`/product-detail/${_id}`}>
                            <div className="mask w-8 h-4">
                              <AiOutlineEye color={"purple"}
                              />
                            </div>
                          </Link>
                          <Link to={`/edit-product/${_id}`}>
                            <div className="mask w-8 h-4">
                              <FaEdit color={"green"}/>
                            </div>
                          </Link>
                          <div className="mask w-8 h-4">
                            <FaTrashAlt color={"red"}
                            onClick={() => confirmDelete(_id)}/>
                          </div>
                        </div>
                    </td>
                  </tr>
                )
              })}
          </tbody> 
          <tfoot className='head'>
            <tr>
              <th>s/n</th> 
              <th>Name</th> 
              <th>Category</th> 
              <th>Price</th> 
              <th>Quantity</th> 
              <th>Value</th> 
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
        )}
      </div>

        <ReactPaginate
            previousLabel="Prev"
            nextLabel="Next"
            pageCount={pageCount}
            onPageChange={handlePageClick}

            containerClassName={"pagination"}
            disabledClassName={'paginationDisable'}
            activeLinkClassName={"activePage"}
          />
    </div>
  )
}

export default ProductList