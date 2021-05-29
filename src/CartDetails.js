import React from 'react';
import {Button} from 'react-bootstrap';

export default class CartDetailsComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            productItems:this.props.location && this.props.location.state && this.props.location.state.productItems ? this.props.location.state.productItems : [],
            cartItems:this.props.location && this.props.location.state && this.props.location.state.cartItems ? this.props.location.state.cartItems : []
        }
        console.log("MEGALA===>Cart constructor",this.props,this.state);
    }
    componentDidMount=()=>{
        console.log("MEGALA===>Cart Component Did Mount",this.props,this.state);
    }
    componentDidUpdate=()=>{
        console.log("MEGALA===>Cart Component Did Update",this.props,this.state);
    }
    getCartDetails=(item,pKey)=>{
        console.log("MEGALA====>inside find : ",item ,"pKey: ",pKey);
        return this.state.cartItems.indexOf(item.p_key.toString()) !== -1
    }
    placeOrder=(event)=>{
        alert("Oops!... Not Implemented");
    }
    closeCartItemPage=()=>{
        this.props.history.push("/",this.state);
    }
    clearCartItems=()=>{
        this.props.history.go(0)
    }
    render(){
        var actualCartItems=this.state.productItems;
        var totalAmount=0;
        actualCartItems = actualCartItems.filter(this.getCartDetails);
        var show = "none";
        if(this.props.location.pathname === "/CartDetails"){
            show="";
        }
        console.log("MEGALA===========>Cart Render :",this.props,this.state);
        return(<div style={{display:show}}  className="cartDetailsContainer" >
            <div className="checkoutTitle">
                My Cart Details
            </div>
            <div className="cartDetailsParent" >
                {actualCartItems.map((actualCartItem,index)=>{
                    totalAmount = totalAmount+ parseInt(actualCartItem.prate,10);
                    return (<div key={index} className="cartDetailsChild">
                    <div className="cartImg">
                        <img src={actualCartItem.imgSrc} alt={actualCartItem.tooltip} />
                    </div>
                    <div className="cartName">{actualCartItem.pname}</div>
                    <div className="cartRate" >{actualCartItem.prateStr}</div>
                </div>)
                })}
            </div>
            <div className="cartTotal">Total Rs. {totalAmount}</div>
            <Button variant="primary" id="btnPlaceOrder" onClick={this.placeOrder} >PLACE ORDER</Button>
            <Button variant="primary" id="btnClearCart" onClick={this.clearCartItems} >CLEAR CART</Button>
            <Button variant="secondary" id="btnCloseCart" tooltip="Close" onClick={this.closeCartItemPage} >X</Button>
           
        </div>)
    }
}