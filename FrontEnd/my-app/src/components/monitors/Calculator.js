import React, {Component} from 'react';

class Calculator extends Component{

    showOrder(orders){
        if(!orders || orders.length ==0){
            return <li className="text-right text-muted">ไม่มีสินค้า</li>;
        }else{
            return orders.map(order=>{
                return(
                    <li className="text-right">
                        {order.product.productName} x {order.quantity} = {(order.quantity * order.product.unitPrice)}
                        <button className="btn btn-light btn-sm" onClick={()=> this.props.onDeleteOrder(order.product)}>x</button>
                    </li>
                    
                )
                
            })
        }
    }

    // discount(totalPrice){

    //     if(totalPrice>=200){
    //         return totalPrice  - ((10/100)*totalPrice); 

    //     }else{
    //         return totalPrice;
    //     }
    // }

    
    render(){

        const{totalPrice, orders} = this.props;
        
        return(
            <div>
                <h1 className="text-right" >{totalPrice} บาท</h1>
                <hr />
                <ul className="list-unstyled">
                    {this.showOrder(orders)}
                </ul>
                <hr />
                {/* <button className="btn btn-block btn-success ">ยืนยัน</button>
                <button className="btn btn-block btn-danger ">ยกเลิก</button> */}
            </div>
        )
    }

}

export default Calculator;