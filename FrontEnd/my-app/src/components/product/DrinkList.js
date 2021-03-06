import React, {Component} from 'react';
import DrinkItem from './DrinkItem';

class DrinkList extends Component{

    showProduct(){
        if(this.props.drinks){
            return this.props.drinks.map(drink => (
                <DrinkItem 
                    key={drink.dinkID}   
                    drink={drink}
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

export default DrinkList;