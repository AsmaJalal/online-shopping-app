import { Card } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions";

const ItemCard = ({ item }) => {
	const cartList = useSelector((state) => state.cartList);
	const dispatch = useDispatch();
	const condition = cartList.some((prod) => prod.id === item.id);

	const addItemToCart = () => {
		dispatch(addToCart(item));
	};

	const removeItemFromCart = () => {
		dispatch(removeFromCart(item));
	};

	return (
		<Card>
			<Card.Body className="d-flex flex-column align-items-center">
				<div className="mb-2">
					<Card.Img variant="top" src={item.images[0]} alt="product image" />
				</div>
				<Card.Title>{item.title}</Card.Title>
				<Card.Text>{item.description}</Card.Text>
				<div className="d-flex flex-column justify-content-end gap-2 w-100">
					<div className="d-flex justify-content-between">
						<p className="mb-0 p-0">${item.price}</p>
						<div className="d-flex align-items-center">
							<p className="m-0 p-0">Rating: {item.rating}</p>
							<BsFillStarFill />
						</div>
					</div>
					<button onClick={condition ? removeItemFromCart : addItemToCart}>
						{condition ? "Remove from cart" : "Add to cart"}
					</button>
				</div>
			</Card.Body>
		</Card>
	);
};

export default ItemCard;
