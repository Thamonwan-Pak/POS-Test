import React, {Component} from 'react';
import Calculator from './Calculator';
import ProductList from '../product/ProductList';
import DrinkList from '../product/DrinkList';
import Promotion from './Promotion';
import {Tab, Nav, Col, Row} from 'react-bootstrap';

class Monitor extends Component{

    constructor(props){
        super(props);
        this.state = {totalPrice: 0, orders: []};
        this.addOrder = this.addOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
    }

    addOrder(product){
        let findOrder = this.state.orders.find(order => order.product.productID == product.productID);
        let findDrink = this.state.orders.find(order => order.product.drinkID == product.drinkID);

        if(product.productID){
            if(findOrder){
                findOrder.quantity++;
            }
            else{
                this.state.orders.push({product: product, quantity: 1});
            }
        }

        if(product.drinkID){
            if(findDrink){
                findDrink.quantity++;
            }else{
                this.state.orders.push({product: product, quantity: 1});
            }
        }

        const totalPrice = this.state.totalPrice + product.unitPrice;

        this.setState({totalPrice: totalPrice, orders: this.state.orders});
    }

    deleteOrder(product){
        
        if(product.productID){
            let findOrder = this.state.orders.find(order => order.product.productID == product.productID);
            let resultOrder = this.state.orders.filter(order=> order.product.productID != product.productID);

            const totalPrice = this.state.totalPrice - (findOrder.quantity * findOrder.product.unitPrice);
            
            this.setState({totalPrice: totalPrice, orders: resultOrder});
        }else{
            let findOrder = this.state.orders.find(order => order.product.drinkID == product.drinkID);
            let resultOrder = this.state.orders.filter(order=> order.product.drinkID != product.drinkID);
    
            const totalPrice = this.state.totalPrice - (findOrder.quantity * findOrder.product.unitPrice);
            
            this.setState({totalPrice: totalPrice, orders: resultOrder});
        }
    }



    render(){
        return(

            <div>
            <h1 className="text-center">Order</h1>
            <br></br>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                  <h2 className="text-center">Menu</h2>
                  <br></br>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Food</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Drink</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={6}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                  <ProductList products={this.props.products} onAddOrder={this.addOrder}/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                  <DrinkList drinks={this.props.drinks} onAddOrder={this.addOrder}/>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
              <Col sm={3}>
              <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onDeleteOrder={this.deleteOrder}/>
              </Col>
            </Row>
          </Tab.Container>
        
          </div>


            // <div className="container-fluid">
            //     <br></br>
            //     <h1 className="text-center">Order</h1>
            //     <div className="row">
            //         <div className="col">
            //             <Promotion />
            //         </div>
            //         <div className="col-5 mt-3">
            //             <ProductList products={this.props.products} onAddOrder={this.addOrder}/>
            //             {/* <DrinkList drinks={this.props.drinks} onAddOrder={this.addOrder}/> */}
            //         </div>
            //         <div className="col">
            //             <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders} onDeleteOrder={this.deleteOrder}/>
            //         </div>
            //     </div>     
            // </div>
        )
    }

}

export default Monitor;