import './App.css';
import MenuItems from './ItemBox.js';
import React from 'react';


class App extends React.Component {

state =
{
  items: [
    {
        name: "Burger", price: 50, category: "Food",
        image: "https://image.flaticon.com/icons/svg/1046/1046784.svg"
    },
    {
        name: "Pizza", price: 100, category: "Food",
        image: "https://image.flaticon.com/icons/svg/1046/1046771.svg"
    },
    {
        name: "Fries", price: 25, category: "Food",
        image: "https://image.flaticon.com/icons/svg/1046/1046786.svg"
    },
    {
        name: "Coffee", price: 35, category: "Drink",
        image: "https://image.flaticon.com/icons/svg/1046/1046785.svg"
    },
    {
        name: "Iced Tea", price: 45, category: "Drink",
        image: "https://image.flaticon.com/icons/svg/1046/1046782.svg"
    },
    {
        name: "Hot Tea", price: 45, category: "Drink",
        image: "https://image.flaticon.com/icons/svg/1046/1046792.svg"
    }
  ],
  cart: [],
  initialTotal: 0,
}

cartItems = (itemName, itemPrice, itemCategory, itemQuantity,) =>
{
  let myOrder = {
    name: itemName,
    price: itemPrice,
    qty: itemQuantity,
    cat: itemCategory,
    sumTotal: this.state.initialTotal + itemPrice,
  };

  let found = false;
  let myCart = this.state.cart.slice(0);

  for(let x=0; x<myCart.length; x++) {
    if(myCart[x].name === itemName) {
      myCart[x].qty += itemQuantity;

      found = true;

      break;
    }
  }

  if(!found) {
    myCart.push(myOrder);
  }

  //myCart.push(myOrder);
  this.setState({
    cart: myCart,
    initialTotal: myOrder.sumTotal,
  });


}

  render()
  {


    return (
      <main>
        <h1>Restaurant App</h1>
        <div id = "menuBox">
          {
            this.state.items.map((item) => {
              return (
                <MenuItems
                  key = {item.name} 
                  menu = {item}
                  myFunction = {this.cartItems} 
                />
              );
            })
          }
        </div>
        <div id = "cartBox">
          <h2>Cart</h2>
          <div>
            <table>
              <tbody>
              {
                this.state.cart.map((ordered) => {
                  return(
                    <tr>
                      <td>{ordered.name}</td>
                      <td>{ordered.qty}</td>
                      <td>{ordered.price}</td>
                    </tr>
                  );
                })
              }
              </tbody>
            </table>
            <hr/>
            <p id="total">Total: {this.state.initialTotal}</p>
          </div>
        </div>
      </main>
    );

  }  
  
}

export default App;
