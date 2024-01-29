import "../../styles/home/home.css";
import img from "../../assets/img/2741840.jpg";

const LandingPage = () => {
	return (
		<div className="landing d-flex flex-column">
			<div>
				<h1>Fake Store</h1>
				<p>A place where you can buy fake things with fake money</p>
			</div>
			<img src={img} alt="landing" />
			<button>Shop Now</button>
		</div>
	);
};

export default LandingPage;
