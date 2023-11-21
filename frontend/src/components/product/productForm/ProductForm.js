import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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
    <form onSubmit={saveProduct} className="p-2 md:w-[30pc] ">
      <div className="my-2 ">
        <span>Product Image:</span>
        <input
          type="file"
          className="outline-none file-input file-input-bordered"
          style={{
            background: "var(--color-l-green)",
            width: "100%",
          }}
          onChange={(e) => handleImageChange(e)}
        />
        {imagePreview != null ? (
          <div className="hero">
            <figure>
              <img
                src={imagePreview}
                className="w-40 h-40 rounded-full shadow-2xl md:p-2 md:w-60 md:h-60"
                alt="product"
              />
            </figure>
          </div>
        ) : (
          <p className="p-1 text-center">No image set for this product.</p>
        )}

        <div className="text-center label-text-alt">
          Supported formats: jpg, jpeg, png
        </div>
      </div>

      <div className="my-2">
        <span>Product Name :</span>
        <input
          type="text"
          placeholder="Product name"
          name="name"
          value={product?.name}
          onChange={handleInputChange}
          className="outline-none input input-bordered"
          style={{
            background: "var(--color-l-green)",
            width: "100%",
            color: "var(--color-black)",
          }}
        />
      </div>

      <div className="my-2">
        <span>Category :</span>
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={product?.category}
          onChange={handleInputChange}
          className="outline-none input input-bordered"
          style={{
            background: "var(--color-l-green)",
            width: "100%",
            color: "var(--color-black)",
          }}
        />
      </div>

      <div className="my-2">
        <span>Product Price :</span>
        <input
          type="number"
          placeholder="$ $ $"
          name="price"
          value={product?.price}
          onChange={handleInputChange}
          className="outline-none input input-bordered"
          style={{
            background: "var(--color-l-green)",
            width: "100%",
            color: "var(--color-black)",
          }}
        />
      </div>

      <div className="my-2">
        <span>Product Quantity :</span>
        <input
          type="text"
          placeholder="Product quantity"
          name="quantity"
          value={product?.quantity}
          onChange={handleInputChange}
          className="outline-none input input-bordered"
          style={{
            background: "var(--color-l-green)",
            width: "100%",
            color: "var(--color-black)",
          }}
        />
      </div>

      <div className="my-2">
        <span>Product Description :</span>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          modules={ProductForm.modules}
          formats={ProductForm.formats}
          style={{ background: "var(--color-l-green)" }}
        />
      </div>

      <button
        type="submit"
        className="w-full p-2 rounded-lg"
        style={{
          background: "var(--color-green)",
          color: "var(--color-l-green)",
        }}
      >
        Save Product
      </button>
    </form>
  );
};

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

export default ProductForm;
