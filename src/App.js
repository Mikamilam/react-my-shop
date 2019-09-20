import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Header from './components/Layout/Header/Header';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Modal from './components/Modal/Modal';
import Slider from './components/Slider/Slider';
import Strollers from './components/Strollers/Strollers';
import Featured from './components/Featured/Featured';

import { PICS } from './assets/pictures';
import { WORDS_eng } from './assets/WORDS_eng';
import { WORDS_rus } from './assets/WORDS_rus';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      products: [
        {
          "_id": "5d29e39120bd22376dd09fff",
          "title": "Acium",
          "picture": PICS.hipseat1,
          "price": 94831
        },
        {
          "_id": "5d29e3918ac67c69e438633a",
          "title": "Rockabye",
          "picture": PICS.hipseat2,
          "price": 18247
        },
        {
          "_id": "5d29e391be5a1e9a7d678d62",
          "title": "Repetwire",
          "picture": PICS.hipseat3,
          "price": 19494
        }
      ],
      strollers: [
        {
          "_id": "5d29e3913878dbd47e05d308",
          "title": "Waretel",
          "picture": PICS.hipseat4,
          "price": 96654
        },
        {
          "_id": "5d29e391e650e64440606124",
          "title": "Codax",
          "picture": PICS.hipseat5,
          "price": 9300
        },
        {
          "_id": "5d29e391f0eac7e2b45bc39a",
          "title": "Virva",
          "picture": PICS.hipseat6,
          "price": 17905
        },
        {
          "_id": "5d29e3915180142ce5c9b63e",
          "title": "Comtest",
          "picture": PICS.hipseat7,
          "price": 75800
        }
      ],
      featured: [
        {
          "_id": "5d29e3918ac67c69e438633a",
          "title": "Rockabye",
          "picture": PICS.hipseat2,
          "price": 18247
        },
        {
          "_id": "5d29e3915180142ce5c9b63e",
          "title": "Comtest",
          "picture": PICS.hipseat7,
          "price": 75800
        },
        {
          "_id": "5d29e391e650e64440606124",
          "title": "Codax",
          "picture": PICS.hipseat5,
          "price": 9300
        },
        {
          "_id": "5d29e391f0eac7e2b45bc39a",
          "title": "Virva",
          "picture": PICS.hipseat6,
          "price": 17905
        }
      ],
      orders: [],
      value: '',
      showModal: false,
      images: [
        "https://images.pexels.com/photos/701016/pexels-photo-701016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://www.pexels.com/photo/baby-s-bassinet-on-green-grass-720740/",
        "https://www.pexels.com/photo/photo-of-a-woman-looking-her-baby-1007773/",
        "https://www.pexels.com/photo/people-girl-design-happy-35188/",
        "https://www.pexels.com/photo/baby-blur-boy-child-301977/"
      ],
      currenIndex: 0,
      translateValue: 0,
      language: 'eng'
    }
      this.addToCart=this.addToCart.bind(this);
      this.removeFromCart=this.removeFromCart.bind(this);
      
      this.showModalHandler=this.showModalHandler.bind(this);
  }



  addToCart(product){
    this.setState({
      cart: [
      ...this.state.cart,
      product
      ]
    })
  }

  removeFromCart(product){
    this.setState({
      cart: this.state.cart.filter(p => p !== product)
    })
  }

  showModalHandler = () => {
    this.setState({
      showModal: !this.state.showModal
    })
    let order = this.state.cart;
    this.setState({
      orders: [
        ...this.state.orders,
        order
        ],
      cart: []
    })
  };

  

  translateState = (language) => {
    this.setState({
      language: language
    })
  }


  render() {
    let modalState = this.state.showModal ? 'flex' : 'none';
    console.log(this.props);
    const translation = this.state.language === 'eng' ? WORDS_eng : WORDS_rus;
    return (
      <div className="App">
        <Layout cart={this.state.cart} translation={translation} translateState={this.translateState}>
          <Switch>
            <Route path="/cart" render={() => 
              <Cart cart={this.state.cart} 
                removeFromCart = {this.removeFromCart} 
                showModal={this.showModalHandler} 
                price={this.state.price} 
                
              />} 
            />
            <Route path="/" exact render={() => {
              return (
                <div>
                  <Slider />
                  <Featured 
                    featured={this.state.featured}
                    translation={translation}
                    addToCart={this.addToCart}
                  />
                </div>
              );
            }}/>
            <Route path="/hipseats" render={() =>
              <Products 
                products={this.state.products} 
                addToCart={this.addToCart}
              />} 
            />
            <Route path="/strollers" render={() =>
              <Strollers 
                strollers={this.state.strollers} 
                addToCart={this.addToCart}
              />} 
            />
          </Switch>
        </Layout>
        <Modal
          display={modalState}
          showModal={this.showModalHandler}
          orders={this.state.orders}
        />
      </div>
    );
  };
};

export default withRouter(App);
