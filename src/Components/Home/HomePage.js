import React, { Component } from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

export class HomePage extends Component {
    render() {
        return (
            <div>
                
                <Header/>
                <SideBar/>
                <Footer/>
            </div>
        )
    }
}

export default HomePage
