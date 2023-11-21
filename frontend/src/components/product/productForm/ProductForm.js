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
    <div>
      <form onSubmit={saveProduct}>
        <div className="shadow-2xl card">
          <div className="mx-5 card-body ">
            <div className="form-control">
              <label className="label" style={{ color: "var(--color-black)" }}>
                <span
                  className="pt-1 pr-2 label-text"
                  style={{
                    color: "var(--color-black)",
                    borderBottom: "2px solid var(--color-green)",
                  }}
                >
                  Product Image:
                </span>
              </label>
              <input
                type="file"
                className="mt-2 file-input file-input-bordered"
                style={{ background: "var(--color-l-green)" }}
                onChange={(e) => handleImageChange(e)}
              />
              {imagePreview != null ? (
                <div className="w-40 p-2 m-2 shadow-xl ">
                  <figure>
                    <img src={imagePreview} alt="product" />
                  </figure>
                </div>
              ) : (
                <p>No image set for this product.</p>
              )}
              <label className="label" style={{ color: "var(--color-black)" }}>
                <span className="label-text-alt">
                  Supported formats: jpg, jpeg, png
                </span>
              </label>
            </div>
            
            <div
              className="form-control"
              style={{ color: "var(--color-black)" }}
            >
              <label className="label">
                <span
                  className="pt-1 pr-2 label-text"
                  style={{
                    color: "var(--color-black)",
                    borderBottom: "2px solid var(--color-green)",
                  }}
                >
                  Product Name:
                </span>
              </label>
              <label className="input-group">
                <span
                  style={{
                    background: "var(--color-green)",
                    color: "var(--color-white)",
                    width: "15pc",
                  }}
                >
                  Product Name
                </span>
                <input
                  type="text"
                  placeholder="Product name"
                  name="name"
                  value={product?.name}
                  onChange={handleInputChange}
                  className="input"
                  style={{ background: "var(--color-l-green)", width: "100%" }}
                />
              </label>
            </div>

            <div
              className="form-control"
              style={{ color: "var(--color-black)" }}
            >
              <label className="label">
                <span
                  className="pt-1 pr-2 label-text"
                  style={{
                    color: "var(--color-black)",
                    borderBottom: "2px solid var(--color-green)",
                  }}
                >
                  Category:
                </span>
              </label>
              <label className="input-group">
                <span
                  style={{
                    background: "var(--color-green)",
                    color: "var(--color-white)",
                    width: "15pc",
                  }}
                >
                  Category
                </span>
                <input
                  type="text"
                  placeholder="Category"
                  name="category"
                  value={product?.category}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  style={{ background: "var(--color-l-green)", width: "100%" }}
                />
              </label>
            </div>

            <div
              className="m-2 form-control"
              style={{ color: "var(--color-black)" }}
            >
              <label className="label">
                <span
                  className="pt-1 pr-2 label-text"
                  style={{
                    color: "var(--color-black)",
                    borderBottom: "2px solid var(--color-green)",
                  }}
                >
                  Product Price:
                </span>
              </label>
              <label className="input-group">
                <span
                  style={{
                    background: "var(--color-green)",
                    color: "var(--color-white)",
                    width: "15pc",
                  }}
                >
                  Product Price
                </span>
                <input
                  type="text"
                  placeholder="$ $ $"
                  name="price"
                  value={product?.price}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  style={{ background: "var(--color-l-green)", width: "100%" }}
                />
              </label>
            </div>

            <div
              className="m-2 form-control"
              style={{ color: "var(--color-black)" }}
            >
              <label className="label">
                <span
                  className="pt-1 pr-2 label-text"
                  style={{
                    color: "var(--color-black)",
                    borderBottom: "2px solid var(--color-green)",
                  }}
                >
                  Product Quantity:
                </span>
              </label>
              <label className="input-group">
                <span
                  style={{
                    background: "var(--color-green)",
                    color: "var(--color-white)",
                    width: "15pc",
                  }}
                >
                  Product Quantity
                </span>
                <input
                  type="text"
                  placeholder="Product quantity"
                  name="quantity"
                  value={product?.quantity}
                  onChange={handleInputChange}
                  className="input"
                  style={{ background: "var(--color-l-green)", width: "100%" }}
                />
              </label>
            </div>

            <div style={{ color: "var(--color-black)" }}>
              <label className="label">
                <span
                  className="pt-1 pr-2 label-text"
                  style={{
                    color: "var(--color-black)",
                    borderBottom: "2px solid var(--color-green)",
                  }}
                >
                  Product Description:
                </span>
              </label>
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
              className="p-2 rounded-xl"
              style={{
                background: "var(--color-green)",
                color: "var(--color-l-green)",
              }}
            >
              Save Product
            </button>
          </div>
        </div>
      </form>
    </div>
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
