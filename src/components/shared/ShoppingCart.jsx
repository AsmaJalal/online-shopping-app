/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "../../styles/shared/shoppingCart.css";
import { useEffect, useState } from "react";

const ShoppingCart = ({ handleCheckout }) => {
	const cartList = useSelector((state) => state.cartList);
	const [subTotal, setSubTotal] = useState(0);

	useEffect(() => {
		setSubTotal(calcSubTotal());
	}, [cartList]);

	const calcSubTotal = () => {
		return cartList.reduce(
			(total, currentItem) => total + currentItem.price * currentItem.quantity,
			0
		);
	};

	return (
		<div className="shopping-cart">
			<div className="items">
				{cartList.map((item, idx) => (
					<CartItem key={idx} item={item} />
				))}
			</div>
			{cartList.length > 0 && (
				<span className="d-inline-block w-100 text-end mt-3 mb-5">
					Sub-total: &emsp; ${subTotal}
				</span>
			)}
			<div className="total-cont d-flex flex-column">
				<div className="d-flex justify-content-between">
					<h5>Total</h5>
					{cartList.length > 0 && <p>${subTotal + 30}</p>}
				</div>
				<div className="d-flex justify-content-between mt-3">
					<span>Sub-total</span>
					<p>${subTotal}</p>
				</div>
				<div className="d-flex justify-content-between">
					<span>Delivery</span>
					<p>$30</p>
				</div>
				<button
					disabled={cartList.length === 0}
					className="btn mt-3 btn-success p-2"
					onClick={handleCheckout}
				>
					Checkout
				</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
