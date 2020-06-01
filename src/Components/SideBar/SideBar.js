import React, { Component } from 'react'
import './SideBar.css'
import ResetFilter from '../../Assets/Images/icons8-reset-24.png';
import ProductLists from '../Products/ProductLists';
import Axios from '../../Services/EcartServices';
import { connect } from 'react-redux';
import { getFilterSearch, getFilterByBrand, getFilterByPrice } from '../../Actions/Action';
export class SideBar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            filterListsData : [],
            brandList : [],
            colorList : [],
            priceList : []
        }

    }
        
    async componentDidMount (){
        this.getFilterLists();
    }
   async getFilterLists () {
        const data = await Axios.get('/filters')
        const response = await data;
        this.setState({ filterListsData: response.data})
        console.log("****filterListsData********",response.data)
        this.setFiltersData(response.data);
       
    }
    
    setFiltersData = (data) => {
        let brand = [];
        let color = [];
        let price = [];
        data.map(filterItems => {
            if(filterItems.type ==="BRAND"){
                brand = filterItems.values
            }
            else if(filterItems.type ==="COLOUR"){
                color = filterItems.values;
            }
            else if(filterItems.type ==="PRICE"){
                price = filterItems.values
            }
            this.setState({brandList : brand, colorList : color, priceList : price})
            console.log("color",this.state.colorList)
        })
    }
    onChecked = (value ) => {
        if(value) {
            this.props.filterDataSearch(value)
        }
    }

    onBrnadCheck = (value) => {
        if(value) {
            this.props.filterByBrand(value)
        }
    }
    onMinPriceSelected = (event) => {
        if(event) {
            this.props.filterByPrice(event.target.value)
        }
    }
    render() {
        let filters = [];
        if (this.state.filterListsData) {
            filters = this.state.filterListsData
        }
        let priceoptions ="";
        let key = 0;
        if(this.state.priceList.length >0) {
            priceoptions = this.state.priceList.map(value => (
                <option value={key = value.key}>{value.displayValue}</option>
                ));
            }
        return (
            
            <div className="sidebar-main">
                <div className="sidebar-left">
                    <div className="sidebar-filter">
                        <label className="sidebar-filterlbl" >Filter</label>
                        <span className="sidebar-resetImg"><img src={ResetFilter} alt="ResetFilter"/></span>
                        <span className="sidebar-resetFilter">Reset Filter</span>
                    </div>
                    <div className="sidebar-filterByItem">
                        <div className="sidebar-color">
                           <span>

                           Color 
                           </span>
                               <br/>
                               
                            {this.state.colorList && this.state.colorList.map(col =>
                                
                                 <>
                                <div style={{display : "inline-block"}}>
                                    <input type="checkbox" onClick={() => this.onChecked(col.color)}/>
                                    <label>{col.title}</label>
                                </div>
                                 
                                 </>
                            )}  
                          
                        </div>
                        <div className="sidebar-color">
                        <span>
                            Brand 
                            </span>
                                <br/>
                                {this.state.brandList && this.state.brandList.map(brand =>
                                
                                <>
                               <div style={{display : "inline-block"}}>
                                   <input type="checkbox" onClick={() => this.onBrnadCheck(brand.title)}/>
                                   <label>{brand.title}</label>
                               </div>
                                
                                </>
                           )}  
                        </div>
                        <div className="sidebar-color">
                            <span>Price</span>
                                    <br/>
                           
                            <div style={{display : "inline-block"}}>
                            <select name="Min" id="min" onChange={this.onMinPriceSelected}>
                            
                            {priceoptions}
                            </select>
                            </div>
                            <div style={{display : "inline-block", paddingLeft : "15px" }}>
                            <select name="Max" id="max">
                             <option>Max</option>
                             <option>No Data</option>
                            </select>
                          
                               </div>
                            
                            
                         

                        </div>
                        <div className="sidebar-color">
                            <span>Discount</span>
                            <br/>
                            <div>No Data Found</div>
                        </div>
                    </div>  
                <div className="sidebar-center">
                   <ProductLists/>
                </div>
                
                </div>

            </div>
        )
    }
}

 
  const mapDispatchToProps = (dispatch) =>
    {
    console.log("mapDispatchToPropsSidebar..")
    return {
        
        filterDataSearch : (value) => {dispatch((getFilterSearch(value)))},
        filterByBrand : (value) => {dispatch((getFilterByBrand(value)))},
        filterByPrice : (value) => {dispatch((getFilterByPrice(value)))}
      }
    }

export default connect(null,mapDispatchToProps)(SideBar)
