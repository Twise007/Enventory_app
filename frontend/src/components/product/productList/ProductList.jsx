import React from 'react'
import { SpinnerImg } from '../../loader/Loader';
import { FaEdit, FaTrashAlt } from "react-icons/fa"
import { AiOutlineEye } from "react-icons/ai"

const ProductList = (products, isLoading) => {
  const shortenText = (text, n) => {
    if (text.lenght > n ) {
      const shortenedText = text.substring(0, n).concat("...")
      return shortenedText
    }
    return text
  }

  return (
    <>
      <div>
        <h3>Inventory Items</h3>
        <h3>Search products</h3>
      </div>

      {isLoading && <SpinnerImg />}

      <div className="overflow-x-auto">
        {!isLoading && products.lenght === 0 ? (
          <p>-- No product found, please add a product....</p>
        ) : (
          <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th> 
              <th>Name</th> 
              <th>Category</th> 
              <th>Price</th> 
              <th>Quantity</th> 
              <th>Value</th> 
              <th>Action</th>
            </tr>
          </thead> 
          <tbody>
            {
              products.map((product, index) =>{
                const {
                  _id, name, category, price, quantity
                } = product
                return (
                  <tr key={_id}>
                    <th>{index + 1}</th> 
                    <td>{shortenText (name, 16)}</td> 
                    <td>{category}</td> 
                    <td>{"N"}{price}</td> 
                    <td>{quantity}</td> 
                    <td>{"N"}{price * quantity}</td> 
                    <td>
                      <span>
                        <AiOutlineEye  size={25} color={"purple"}/>
                      </span>
                      <span>
                        <FaEdit  size={20} color={"green"}/>
                      </span>
                      <span>
                        <FaTrashAlt  size={20} color={"red"}/>
                      </span>
                    </td>
                </tr>
                )
              })
            }
          </tbody> 
          <tfoot>
            <tr>
              <th></th> 
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
    </>
  )
}

export default ProductList