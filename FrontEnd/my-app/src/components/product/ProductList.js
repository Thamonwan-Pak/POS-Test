import React, {Component} from 'react';
import ProductItem from './ProductItem';

class ProductList extends Component{

    showProduct(){
        if(this.props.products){
            return this.props.products.map(product => (
                <ProductItem 
                    key={product.productID}   
                    product={product}
                    onAddOrder={this.props.onAddOrder}

                />
            ))
        }else{
            return "ไม่มีข้อมูล";
        }
    }

    render(){

        return(
            <div className="row">
                {this.showProduct()}
            </div>
        )
    }

}

export default ProductList;