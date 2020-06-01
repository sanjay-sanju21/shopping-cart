import Axios from '../Services/EcartServices'
import ActionTypes from './ActionTypes'

export const userLogin = (username) => {
    console.log("************", username)
    return async (dispatch) => {
        const data = await Axios.get('/users?username=' + username)
        const response = await data;
        console.log("************", response)
        dispatch(getUserDetails(response))
    }

}


export const getProductLists = () => {
    console.log("****in getProductLists*");
    debugger;
    return async (dispatch) => {
        const data = await Axios.get('/products')
        const response = await data;
        console.log("****getProductLists********", response)
        dispatch(getAllProductLists(response))
    }
}
export const getFilterProducts = (pname) => {
    console.log("****in getFilterProducts*", pname);
    debugger;
    return async (dispatch) => {
        const data = await Axios.get('/products?title=' + pname)
        const response = await data;
        console.log("****getFilterProducts********", response)
        dispatch(getAllFilterProducts(response))
    }
}


export const getUserDetails = (userList) => {
    return {
        type: ActionTypes.USER_LOGIN,
        userList: userList
    }
}

export const getAllProductLists = (productLists) => {
    return {
        type: ActionTypes.GET_PRODUCT_LISTS,
        productLists: productLists
    }
}

export const addToCart = () => {
    console.log("addToCart")
    return {
        type: ActionTypes.ADD_TO_CART,

    }
}
export const getAllFilterProducts = (filterProducts) => {
    return {
        type: ActionTypes.GET_FILTER_PRODUCTS,
        filterProducts: filterProducts
    }
}

export const getFilterSearch = (filterSearch) => {
    console.log("addToCart".filterSearch)
    return {
        type: ActionTypes.GET_FILTER_SEARCH,
        filterSearch: filterSearch
    }
}
export const getFilterByBrand = (filterByBrand) => {
    console.log("addToCart".filterByBrand)
    return {
        type: ActionTypes.GET_FILTER_BY_BRAND,
        filterByBrand: filterByBrand
    }
}
export const getFilterByPrice = (filterByPrice) => {
    console.log("addToCart".filterByPrice)
    return {
        type: ActionTypes.GET_FILTER_BY_PRICE,
        filterByPrice: filterByPrice
    }
}


export const getFilterColor = (cState, value) => {
    var getData = cState.filter((color) => color.colour.color.includes(value));
    return getData
}

export const getFilterPrice = (cState, value) => {
    var filterPrice = cState.filter(function (price) {
        return price.price.final_price >= value;
    })
    console.log(filterPrice)
    return filterPrice
}

export const getFilterBrand = (cState, value) => {
    const filterBrand = cState.filter((brand) => {
        return brand.brand.indexOf(value.toLowerCase()) !== -1
        console.log(filterBrand)
        return filterBrand
    })

}    
