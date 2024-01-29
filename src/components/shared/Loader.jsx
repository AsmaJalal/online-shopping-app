import { Spinner } from "react-bootstrap";
import "../../styles/shared/loader.css";

const Loader = () => {
	return (
		<div className="loader">
			<Spinner animation="border" variant="warning" />
		</div>
	);
};

export default Loader;
