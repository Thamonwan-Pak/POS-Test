import React, {Component} from 'react';

class ProductItem extends Component{

    constructor(props){
        super(props);
        // console.log("Constructor "+ props.productName);
    }


    render(){
    const {productName, unitPrice, thumbnail} = this.props.product;
    const styleImg = {width: 200, height: 150};
    return (
        <div className="col-md-6 col-sm-6">
            <img style={styleImg} className="mx-auto d-block img-thumbnail" src={thumbnail}/>
            <h5 className="mt-2" >{productName}</h5>
            <p className="text-right">{unitPrice} บาท</p>
            <button className="btn btn-block btn-secondary"  onClick={()=>this.props.onAddOrder(this.props.product)}>ซื้อ</button>
            <hr />
        </div>

    )
    }
}

export default ProductItem;