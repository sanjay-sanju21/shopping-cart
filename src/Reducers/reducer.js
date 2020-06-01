import ActionTypes from "../Actions/ActionTypes";
import { getFilterColor, getFilterPrice, getFilterBrand } from "../Actions/Action";

const iState = {
    userName: '',
    isLogin: false,
    productsLists: [],
    cartCount: 0,
    filterProducts: [],
    filterSearch: [],
    filterByBrand: [],
    filterByPrice: []
}

const reducer = (state = iState, action) => {
    switch (action.type) {
        case ActionTypes.USER_LOGIN:
            return {
                ...state,
                userName: action.userList.data,
                isLogin: true
            }
        case ActionTypes.GET_PRODUCT_LISTS:
            return {
                ...state,
                productsLists: action.productLists.data
            }
        case ActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartCount: state.cartCount + 1
            }
        case ActionTypes.GET_FILTER_PRODUCTS:
            return {
                ...state,
                filterProducts: action.filterProducts.data
            }
        case ActionTypes.GET_FILTER_SEARCH:
            return {
                ...state,
                filterSearch: getFilterColor(state.productsLists, action.filterSearch)


            }
        case ActionTypes.GET_FILTER_BY_BRAND:
            return {
                ...state,
                filterByBrand: getFilterBrand(state.productsLists, action.filterByBrand)
            }
        case ActionTypes.GET_FILTER_BY_PRICE:
            return {
                ...state,
                filterByPrice: getFilterPrice(state.productsLists, action.filterByPrice)
            }
        default:
            return state;
    }
}

export default reducer;