import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/products/`


//create new product
export const createProduct = async (formData) => {
    const response = await axios.post(API_URL, formData)
    return response.data
}

//get all product
export const getProducts = async () => {
    const response = await axios.get(API_URL,)
    return response.data
}

// Delete a Product
const deleteProduct = async (id) => {
    const response = await axios.delete(API_URL + id);
    return response.data;
  };

// Get a Product
const getProduct = async (id) => {
    const response = await axios.get(API_URL + id);
    return response.data;
  };

// Update a Product
const updateProduct = async (id, formData) => {
    const response = await axios.patch(`${API_URL}${id}`, formData);
    return response.data;
  };

const productService = {
    createProduct,
    getProducts,
    deleteProduct,
    getProduct,
    updateProduct,
}


export default productService;