import React, { Component } from 'react'
import { connect } from 'react-redux';
// import {bindActionCreators} from 'redux'
import { getProductLists, addToCart } from '../../Actions/Action';
import './ProductList.css'
import AddIcon from '../../Assets/Images/icons8-add-32.png'
export class ProductLists extends Component {

    constructor(props) {
        super(props)

        this.state = {
            productListsData: [],
            allProducts: {},
            filterData: []
        }
    }

    async componentDidMount() {
        this.props.getAllProducts()
    }

    render() {

        console.log(this.props.productsLists)
        const { filterSearch, filterByBrand, filterByPrice } = this.props;


        let products = [];
        if (this.props.productsLists) {

            products = this.props.productsLists
        }
        if (Array.isArray(this.props.filterProducts) && this.props.filterProducts.length > 0) {
            products = this.props.filterProducts
        }
        else if (Array.isArray(filterSearch) && filterSearch.length > 0) {
            products = filterSearch
        }
        if (Array.isArray(filterByPrice) && filterByPrice.length > 0) {
            products = filterByPrice
        }
        if (Array.isArray(filterByBrand) && filterByBrand.length > 0) {
            products = filterByBrand
        }


        return (
            <div>

                {products.length > 0 && products.map((products, index) => (
                    <div className="card">

                        <div className="image">
                            <img src={products.image} />
                        </div>
                        <div className="discount">
                            {products.discount}
                        </div>

                        <div className="row">
                            <div className="left-column">
                                <span className="product-title">
                                    Product {products.title}

                                </span>
                                <span className="product-brand ">
                                    Brand {products.brand}</span>
                                <span className="product-brand ">

                                    {products.price['final_price'] + '$'}
                                </span>
                            </div>
                            <div className="column2">

                                <span>
                                    Color
                         </span>

                                <span className="add-icon">
                                    <img src={AddIcon} alt="AddIcon" onClick={() => this.props.onAddCartClicked()} />
                                </span>
                            </div>

                            <div className="column3">
                                <span className="color-box">

                                    <div style={{ height: "20px", width: "20px", background: products.colour['color'] }}></div>
                                </span>
                                <span className="color-add" onClick={() => this.props.onAddCartClicked()}>Add</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllProducts: () => { dispatch((getProductLists())) },
        onAddCartClicked: () => { dispatch((addToCart())) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductLists)
