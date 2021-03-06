import React, {Component} from 'react';
import Hearder from '../../components/Header';
import Footer from '../../components/Footer';
import Monitor from '../../components/monitors/Monitor';

class Orders extends Component{

  constructor(props){
    super(props);
    this.state = {products: ""};
    this.state = {drinks: ""};
  }

  componentDidMount(){
    this.setState({products: [
      {productID: 1, productName: "มาม่ารสเผ็ด", unitPrice: 45, thumbnail: "/images/มาม่าเผ็ด.png"},
      {productID: 2, productName: "มาม่ารสเผ็ดx2", unitPrice: 50, thumbnail: "/images/มาม่าเผ็ดx2.jpg"},
      {productID: 3, productName: "มาม่ารสกิมจิ", unitPrice: 35, thumbnail: "/images/มาม่ากิมจิ.jpg"},
      {productID: 4, productName: "มาม่ารสชีส", unitPrice: 55, thumbnail: "/images/มาม่าชีส.png"},
      {productID: 5, productName: "มาม่ารสชีส2", unitPrice: 60, thumbnail: "/images/มาม่าชีส2.jpg"},
      {productID: 6, productName: "มาม่ารสเผ็ดมาเลเซีย", unitPrice: 75, thumbnail: "/images/มาม่ามาเลย์.jpg"}
     ]})

     this.setState({drinks: [
      {drinkID: 1, productName: "น้ำเปล่า", unitPrice: 10, thumbnail: "/images/น้ำเปล่า.jpg"},
      {drinkID: 2, productName: "น้ำอัดลม", unitPrice: 20, thumbnail: "/images/น้ำอัดลม.jpg"},
      {drinkID: 3, productName: "เบีย", unitPrice: 100, thumbnail: "/images/เบียร์.jpg"},
      {drinkID: 4, productName: "โซจู", unitPrice: 200, thumbnail: "/images/โซจู.jpg"}
    ]})
  }

  render(){
    return (
      <div>
        <Hearder />
        <Monitor products={this.state.products} drinks={this.state.drinks}/>
        <Footer company="แพ-โก-พา" tel="02-96523516"/>
        
      </div>
    );
  }

}

export default Orders;