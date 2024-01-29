import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/home/LandingPage";
import ShoppingPage from "./components/shop/ShoppingPage";

const AppRoute = () => {
	return (
		<Routes>
			<Route path="/shopping-cart" element={<LandingPage />} />
			<Route path="/shopping-cart/shop/:category" element={<ShoppingPage />} />
		</Routes>
	);
};

export default AppRoute;
