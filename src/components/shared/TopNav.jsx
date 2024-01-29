import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { removeAllCart } from "../../redux/actions";
import { useState } from "react";
import SuccessModal from "./SuccessModal";
import ShoppingCart from "./ShoppingCart";
import "../../styles/shared/topNav.css";

const TopNav = () => {
	const cartCount = useSelector((state) => state.cartCount);
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const [modalShow, setModalShow] = useState(false);

	const toggleModal = () => setModalShow(!modalShow);

	const toggleShow = () => setShow(!show);

	const handleCheckout = () => {
		dispatch(removeAllCart());
		toggleShow();
		toggleModal();
	};

	return (
		<>
			<Navbar expand="sm">
				<Container fluid>
					<Navbar.Toggle aria-controls="navbar" />
					<Navbar.Collapse id="navbar">
						<Nav>
							<Link to="/shopping-cart" className="link">
								Home
							</Link>
							<Link to="/shopping-cart/shop/smartphones" className="link">
								Shop
							</Link>
							<button
								onClick={toggleShow}
								className="cart-cont position-relative"
							>
								<BsBag />
								<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
									{cartCount}
								</span>
							</button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Offcanvas placement="end" scroll={false} show={show} onHide={toggleShow}>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Items in your bag</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<ShoppingCart handleCheckout={handleCheckout} />
				</Offcanvas.Body>
			</Offcanvas>
			<SuccessModal onHide={toggleModal} show={modalShow} />
		</>
	);
};

export default TopNav;
