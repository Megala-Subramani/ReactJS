import React from 'react';
import {Route} from 'react-router-dom';
import BodyComponent from './Body';


export default class HomeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            productItems:[{"p_key":101,"pname":"Tool Kit","prate":"149","prateStr":"Rs.149","imgSrc":"https://rukminim1.flixcart.com/image/150/150/power-hand-tool-kit/v/v/g/gsb-500-re-kit-bosch-original-imaeg63dbybtqzfy.jpeg?q=70","tooltip":"Power Hand Tool Kit"},{"p_key":102,"pname":"Smart Watch","prate":"1400","prateStr":"Rs.1400","imgSrc":"https://rukminim1.flixcart.com/image/150/150/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70","tooltip":"Smart Watch"},{"p_key":103,"pname":"Fitness Kit","prate":"100","prateStr":"Rs.100","imgSrc":"https://rukminim1.flixcart.com/flap/150/150/image/42837a22152f245f.jpg?q=70","tooltip":"Fitness Kit"},{"p_key":104,"pname":"Pressure Cooker","prate":"999","prateStr":"Rs.999","imgSrc":"https://rukminim1.flixcart.com/image/200/200/pressure-cooker/w/z/k/cb35-hawkins-original-imaegtf4shgpwpud.jpeg?q=70","tooltip":"Pressure Cooker"},{"p_key":105,"pname":"Shoe","prate":"600","prateStr":"Rs.600","imgSrc":"https://rukminim1.flixcart.com/image/150/150/kn0n6a80/shoe/5/k/f/9-sp7207-kraasa-navy-original-imagfsq6gnsytdfa.jpeg?q=70","tooltip":"Shoe"},{"p_key":106,"pname":"Bathroom Essential","prate":"230","prateStr":"Rs.230","imgSrc":"https://rukminim1.flixcart.com/image/150/150/faucet/k/c/z/f160027cp-hindware-original-imaefqjuw9qfvnhq.jpeg?q=70","tooltip":"Bathroom Essential"},{"p_key":107,"pname":"Mosquito Net","prate":"600","prateStr":"Rs.600","imgSrc":"https://rukminim1.flixcart.com/image/150/150/khtghow0/mosquito-net/t/y/a/blue-mosquito-net-polyester-adults-net-king-size-double-bed-original-imafxqn3uqzdhgey.jpeg?q=70","tooltip":"Mosquito Net"}],
            cartItems:[]
        }
        console.log("MEGALA===>constructor from Home:",this.props,this.state);
    }
    showCartDetails=(event)=>{
        console.log("Home showCartDetails==>",this.props,this.state);
        this.props.history.push("/CartDetails",this.state);
    }
    addCartItem=(event)=>{        
        var pKey=event.target.getAttribute("data-pkey");
        var cart = this.state.cartItems;
        cart.push(pKey);
        this.setState({cartItems : cart }); 
        event.target.style.display="none";
        event.target.nextElementSibling.style.display="";
        console.log("addCartItem : ",this.state,cart);
    }
    removeCartItem=(event)=>{
        var pKey=event.target.getAttribute("data-pkey");
        var cart = this.state.cartItems;
        var index=cart.indexOf(pKey);
        event.target.style.display="none";
        event.target.previousElementSibling.style.display="";
        if(index !== -1){
            cart.splice(index,1);
            this.setState({cartItems : cart });  
        }
        console.log("removeCartItem : ",this.state,cart);
    }
    componentDidUpdate=()=>{
        console.log("MEGALA===>Home Component Did Update",this.props,this.state);  
    }
    componentDidMount=()=>{
        console.log("MEGALA===>Home Component Did Mount",this.props,this.state);
        
    }
    render(){
        console.log("MEGALA===========>Home Render :",this.props,this.state);
        var displayCartNotif="none";
        var notifCount="";
        if(this.state.cartItems){  
            var cartItems = this.state.cartItems;
            var len = cartItems.length;       
            if(len > 0){
                displayCartNotif="";
                notifCount=len;
            }
        }
        return(<React.Fragment>
            <div className="headerContent" >
                <div className="webpageTitle" ><h1>Zee Online Shopping</h1></div>
                <div className="cartDetails" onClick={this.showCartDetails} ></div>
                <div className="cartNotification" style={{display:displayCartNotif}} onClick={this.showCartDetails} >{notifCount}</div>
            </div>
            <Route path="/" render={(props)=> <BodyComponent addItemFuncProp={this.addCartItem} rmvItemFuncProp={this.removeCartItem} productItems={this.state.productItems} {...props} /> }  ></Route>
           <div  className="footerContent" >
            <div className="copyRights">Copyright © 2011 Zee Online Shopping. All Rights Reserved. </div>                                                                         
                <div className="dvPrivicy"><u>Legal</u> / <u>Privacy</u></div>
            </div>
           </React.Fragment>)
    }
}