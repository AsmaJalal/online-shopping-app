import { Modal } from "react-bootstrap";
import check from "../../assets/img/check mark.jpg";
import "../../styles/shared/successModal.css";

const SuccessModal = (props) => {
	return (
		<Modal {...props} aria-labelledby="success-modal" centered>
			<Modal.Header closeButton>
				<Modal.Title>Payment successful!</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>Hooray! You have completed your payment.</p>
				<img src={check} alt="check mark" />
			</Modal.Body>
		</Modal>
	);
};

export default SuccessModal;
