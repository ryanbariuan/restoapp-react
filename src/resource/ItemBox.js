import React from 'react';
import './ItemBox.css';

class ItemBox extends React.Component{

  btnItemOrdered = (event) => 
    {
      let qty = 1;

      this.props.myFunction(
        this.props.menu.name,
        this.props.menu.price,
        this.props.menu.category,
        qty,
        );

    }


  render (){

    return(
      <div className = "itemBox">
        <div className = "imageBox">
            <img src = {this.props.menu.image} alt = {this.props.menu.image}/>
        </div>
        <div className = "itemDetails">
            <strong>{this.props.menu.name}</strong>
            <p><small>Php {this.props.menu.price}</small></p>
            <p><button onClick={
              (e) => {
                this.btnItemOrdered(e)
              }
            }>Order</button></p>
        </div>
      </div>
    );

  }

}
export default ItemBox;