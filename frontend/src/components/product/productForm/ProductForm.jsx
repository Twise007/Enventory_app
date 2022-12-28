import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ProductForm = ({
  product,
  productImage, 
  imagePreview, 
  description, 
  setDescription, 
  handleInputChange,
  handleImageChange,
  saveProduct,
}) => {
  return (
    <div className="hero">
      <form onSubmit={saveProduct}>
      <div className="card flex-shrink-0 shadow-2xl">
      <div className="card-body m-5">
        <div className="form-control m-2 w-96">
          <label className="label" style={{color:"var(--color-black)"}}>
            <span>Product Image</span>
          </label>
          {imagePreview != null ? (
            <div className="card w-96 shadow-xl">
              <figure><img src={imagePreview} alt="product image" /></figure>
            </div>
          ) : (
          <p>No image set for this product.</p>
          )}
          <input type="file" className="file-input file-input-bordered max-w-xs mt-2" style={{background:"var(--color-l-green)"}} onChange={(e) => handleImageChange(e)}/>
          <label className="label" style={{color:"var(--color-black)"}}>
            <span className="label-text-alt">Supported formats: jpg, jpeg, png</span>
          </label>
        </div>

        <div style={{borderBottom:"2px solid var(--color-green)"}}/>
        
        <div className="form-control m-2" style={{color:"var(--color-black)"}}>
          <label className="label" >
            <span className="label-text" style={{color:"var(--color-black)"}}>Product Name:</span>
          </label>
          <label className="input-group">
            <span style={{background:"var(--color-green)", color:"var(--color-white)"}}>Product name</span>
            <input type="text" placeholder="Product name" name='name' value={product?.name} onChange = {handleInputChange} className="input input-bordered" style={{background:"var(--color-l-green)",}}/>
          </label>
        </div>
      
        <div style={{borderBottom:"2px solid var(--color-green)"}}/>
        <div className="form-control m-2" style={{color:"var(--color-black)"}}>
          <label className="label" >
            <span className="label-text" style={{color:"var(--color-black)"}}>Category:</span>
          </label>
          <label className="input-group">
            <span style={{background:"var(--color-green)", color:"var(--color-white)"}}>Category</span>
            <input type="text" placeholder="Category" name='category' value={product?.category} onChange = {handleInputChange} className="input input-bordered" style={{background:"var(--color-l-green)",}}/>
          </label>
        </div>
      
        <div style={{borderBottom:"2px solid var(--color-green)"}}/>
        <div className="form-control m-2" style={{color:"var(--color-black)"}}>
          <label className="label" >
            <span className="label-text" style={{color:"var(--color-black)"}}>Product Price:</span>
          </label>
          <label className="input-group">
            <span style={{background:"var(--color-green)", color:"var(--color-white)"}}>Product Price</span>
            <input type="text" placeholder="$ $ $" name='price' value={product?.price} onChange = {handleInputChange} className="input input-bordered" style={{background:"var(--color-l-green)",}}/>
          </label>
        </div>
      
        <div style={{borderBottom:"2px solid var(--color-green)"}}/>
        <div className="form-control m-2" style={{color:"var(--color-black)"}}>
          <label className="label" >
            <span className="label-text" style={{color:"var(--color-black)"}}>Product Quantity:</span>
          </label>
          <label className="input-group">
            <span style={{background:"var(--color-green)", color:"var(--color-white)"}}>Product Quantity</span>
            <input type="text" placeholder="Product quantity" name='quantity' value={product?.quantity} onChange = {handleInputChange} className="input input-bordered" style={{background:"var(--color-l-green)",}}/>
          </label>
        </div>
      
        <div style={{borderBottom:"2px solid var(--color-green)"}}/>

        <div className="form-control m-2" style={{color:"var(--color-black)"}}>
          <label className="label" >
            <span className="label-text" style={{color:"var(--color-black)"}}>Product Description:</span>
          </label>
          <ReactQuill theme="snow" value={description} onChange={setDescription} modules={ProductForm.modules} formats={ProductForm.formats}/>
        </div>

        <button type='submit' className="btn" style={{background:"var(--color-green)", color:"var(--color-l-green)"}}>Save Product</button>


      </div>
      </div>
      </form>
    </div>
  )
}

ProductForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
ProductForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];


export default ProductForm