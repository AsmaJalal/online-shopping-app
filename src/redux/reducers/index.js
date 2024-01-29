import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	SET_PRODUCTS,
	SET_CATEGORIES,
	UPDATE_CART,
	REMOVE_ALL_IN_CART,
	SET_LOADING
} from "../actions";

const initialState = {
	products: [],
	categories: [],
	cartList: [],
	cartCount: 0,
	isLoading: false
};

const reducer = (state = initialState, action) => {
	const { item, products, categories, value } = action;
	switch (action.type) {
		case SET_PRODUCTS:
			return {
				...state,
				products: products
			};
		case ADD_TO_CART:
			return {
				...state,
				cartCount: state.cartCount + 1,
				cartList: state.cartList.concat({ ...item, quantity: 1 })
			};
		case REMOVE_FROM_CART:
			return {
				...state,
				cartCount: state.cartCount - 1,
				cartList: state.cartList.filter((prod) => prod.id !== item.id)
			};
		case REMOVE_ALL_IN_CART:
			return {
				...state,
				cartCount: 0,
				cartList: []
			};
		case UPDATE_CART:
			return {
				...state,
				cartList: state.cartList.map((prod) =>
					prod.id === item.id ? item : prod
				)
			};
		case SET_CATEGORIES:
			return {
				...state,
				categories: categories
			};
		case SET_LOADING:
			return {
				...state,
				isLoading: value
			};
		default:
			return state;
	}
};

export default reducer;
