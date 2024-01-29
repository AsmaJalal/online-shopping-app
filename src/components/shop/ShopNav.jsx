/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions";
import { Link, useLocation } from "react-router-dom";
import "../../styles/shop/shopNav.css";

const ShopNav = () => {
	let location = useLocation();
	const categories = useSelector((state) => state.categories);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategories());
	}, []);

	return (
		<nav className="shop-nav">
			<div>
				<h2 className="mb-3 pb-2">Product Categories</h2>
				<ul className="row justify-content-center gap-4">
					{categories.map((category, idx) => (
						<li className="col-auto col-sm-12" key={idx}>
							<Link
								to={`/shopping-cart/shop/${category}`}
								className={
									location.pathname === `/shopping-cart/shop/${category}`
										? "active"
										: ""
								}
							>
								<span>{category[0].toUpperCase() + category.slice(1)}</span>
								<span>(5)</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default ShopNav;
