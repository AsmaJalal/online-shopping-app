import axios from "axios";

export const fetchProducts = param => {
    return axios.get("https://dummyjson.com/products/category/" + param)
}

export const fetchCategories = () => {
    return axios.get("https://dummyjson.com/products/categories")
}