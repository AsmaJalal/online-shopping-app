import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCart } from "../../redux/actions";

const CartItem = ({ item }) => {
	const dispatch = useDispatch();

	const removeItemFromCart = () => dispatch(removeFromCart(item));

	const handleChange = (e) =>
		dispatch(updateCart({ ...item, quantity: e.target.value }));

	return (
		<div className="cart-item">
			<span>
				<img src={item.images[0]} alt="product display" />
			</span>
			<div>
				<p className="price">${item.price}</p>
				<p className="title">{item.title}</p>
				<p className="desc">{item.description}</p>
				<div className="d-flex gap-2 align-items-center">
					<p>Qty:</p>
					<input
						type="number"
						min={1}
						value={item.quantity}
						onChange={handleChange}
					/>
				</div>
			</div>
			<GrClose onClick={removeItemFromCart} />
		</div>
	);
};

export default CartItem;
