/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getProducts } from "../../redux/actions";
import ItemCard from "./ItemCard";
import Loader from "../shared/Loader";

const ShopContents = () => {
	let location = useLocation();
	const isLoading = useSelector((state) => state.isLoading);
	const dispatch = useDispatch();
	const { category } = useParams();
	const products = useSelector((state) => state.products);

	useEffect(() => {
		dispatch(getProducts(category));
	}, [location]);

	return (
		<div className="shop-content w-100">
			{isLoading && <Loader />}
			{products.map((product, idx) => (
				<ItemCard key={idx} item={product} />
			))}
		</div>
	);
};

export default ShopContents;
