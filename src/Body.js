import React from 'react';

export default class BodyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            translatePosition : 0,
            sliderPageIndex:0,
            containerWidth:1600,
            productItems: this.props.productItems ? this.props.productItems : [],
            cartItems:[]
        }
        console.log("MEGALA===>Body constructor",this.props,this.state);
    }
    createSeprateObjRef(users){
        if (users === null || typeof users !== 'object') {
            return users;
        }
        var storage = users.constructor(); 
        for (var key in users) {
           storage[key] = this.createSeprateObjRef(users[key]);
        }
        return storage;
    }
    
    componentDidMount=()=>{
        console.log("MEGALA===>Body Component Did Mount",this.props,this.state);
        setInterval(()=>{
            var index = this.state.sliderPageIndex ;
            index = index > 3 ? 0 : index ; 
            var width = this.state.containerWidth;
            var translatePosition = -(width*index);
            this.setState({translatePosition:translatePosition,sliderPageIndex:index+1});
            //console.log("MEGALA=====>translatePosition: ",translatePosition);
        },2000)
    }
    componentDidUpdate=()=>{
        console.log("MEGALA===>Body Component Did Update",this.props,this.state);
       
    }
    render(){
        console.log("MEGALA===========>Body Render :",this.props,this.state);
        var style={transform : 'translateX('+this.state.translatePosition +'px)'};
        //console.log("Render Called: ",style);
        return(<div className="bodyContent">
            <div className="dvSlideShowContainer">
                <div className="dvSliderParent" style={style} >
                    <div className="dvSliderChildren" >
                        <img src="https://rukminim1.flixcart.com/flap/1688/280/image/e9fd495eb4323237.jpg?q=50" alt="HPW_RM X7 Max" />
                    </div>
                    <div className="dvSliderChildren" >
                        <img src="https://rukminim1.flixcart.com/flap/1688/280/image/f24499872124a69c.jpg?q=50" alt="Laptop" />
                    </div>
                    <div className="dvSliderChildren">
                        <img src="https://rukminim1.flixcart.com/flap/1688/280/image/c6142feb73141781.jpg?q=50" alt="Samsung Fridge" />
                    </div>
                    <div className="dvSliderChildren">
                        <img src="https://rukminim1.flixcart.com/flap/1688/280/image/1c910fad263a7475.jpg?q=50" alt="Boat dolby" />
                    </div>
                </div>
            </div>
            <div className="dvDealsOftheDayContainer">
                <div className="dvDODHeader" ><h4>Deals Of the Day</h4></div>
                <div className="dvDODParent" >
                    {this.state.productItems.map((productItem,index)=>{
                        var addCart = this.state.cartItems.indexOf(productItem.p_key.toString()) !== -1 ? "none" : "";
                        var rmvCart = addCart === "" ? "none" : "";
                        return (
                            <div key={index} className="dvDODChild">
                                <div className="productImg">
                                    <img src={productItem.imgSrc} alt={productItem.tooltip} />
                                </div>
                                <div className="productName">{productItem.pname}</div>
                                <div className="productRate" >{productItem.prateStr}</div>
                                <div className="addCart" style={{display:addCart}} data-pkey={productItem.p_key} onClick={this.props.addItemFuncProp} >Add to Cart</div>
                                <div className="removeCart" style={{display:rmvCart}} data-pkey={productItem.p_key} onClick={this.props.rmvItemFuncProp} >Remove from Cart</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>)
    }

}