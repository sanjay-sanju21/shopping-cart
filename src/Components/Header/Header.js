import React, { Component } from 'react'
import './Header.css'
import Logo from '../../Assets/Images/add-to-basket.svg';
import UserLogo from '../../Assets/Images/user.svg';
import BasketLogo from '../../Assets/Images/supermarket.svg';
import { connect } from 'react-redux';
import { getFilterProducts } from '../../Actions/Action';
export class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }

    render() {
        var userName = this.props.userName;
        if (userName) {
            userName.map((name => {
                userName = name.fullName;
            }))
        }

        return (
            <div className="header-main">
                <div className="header-container">
                    <div className="header-logo">
                        <img className="header-logo-img" src={Logo} alt="Logo" />
                    </div>
                    <div className="header-search">
                        <input className="header-search-input" type="text" placeholder="Search Product"
                            onChange={(e) => this.props.onProductSearch(e.target.value)} />
                    </div>
                    <div className="header-userInfo">

                        <img className="userlogo" src={UserLogo} alt="userlogo" />
                        <label className="userName">Welcome  {userName}</label>

                        <img className="basketlogo" src={BasketLogo} alt="basketlogo" />
                        <label className="cartItem">{this.props.cartCount}  Item</label>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("header...", state.cartCount)// name : state.name,
    return state
}

const mapDispatchToProps = (dispatch) => {
    console.log("mapDispatchToProps..")
    return {
        onProductSearch: (pname) => { dispatch((getFilterProducts(pname))) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
