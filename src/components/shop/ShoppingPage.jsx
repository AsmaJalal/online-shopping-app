import ShopNav from "./ShopNav";
import ShopContents from "./ShopContents";
import "../../styles/shop/shoppingPage.css";

const ShoppingPage = () => {
	return (
		<div className="shopping-page d-flex flex-column flex-sm-row gap-4">
			<ShopNav />
			<ShopContents />
		</div>
	);
};

export default ShoppingPage;
