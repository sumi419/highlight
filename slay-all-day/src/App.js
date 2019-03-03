import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ProductsList from './components/ProductsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
   componentDidMount() {
     const api = 'http://makeup-api.herokuapp.com/api/v1/';
     axios
       .get(`${api}products.json`)
       .then((res) => {
         console.log(res);
         return res.json();
       })
       .then(data => {
        this.setState({ products: data })
        // this.setState({ products: [...this.state.products, ...data.results] });
      })
       .catch((err) => console.error(err));
   }

  render() {
    return (
      <div className="App">
        <div> Hello World </div>
        <ProductsList products={this.state.products}/>
      </div>
    );
  }
}

export default App;
