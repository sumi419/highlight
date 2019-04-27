import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

// made this parent of Nav
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      products: [],
      filtered: []
    };
  }

  componentDidMount() {
    const api = 'http://makeup-api.herokuapp.com/api/v1/products.json';
    axios
      .get(api)
      .then((res) => {
        console.log(res.data);
        this.setState({ products: res.data });
      })
      .catch((err) => console.error(err));
  }

  handleSearchInput = (e) => {
    e.preventDefault();
    this.setState(
      {
        searchInput: e.target.value
      },
      () => this.itemFilter()
    );
  };

  render() {
    console.log(this.state.products);
    let filtered = this.state.products.filter((product) =>
      product.name.includes(this.state.searchInput)
    );
    return (
      <div>
        <NavBar searchInput={this.state.searchInput} handleSearchInput={this.handleSearchInput} />
        <div className='products-list'>
          {filtered.map((product) => (
            <div key={product.id} className='products-card'>
              <h1>{product.name}</h1>
              <div>
                <p>{product.brand} unit</p>
                <p>{product.product_link}</p>
                <img src={product.image_link} alt='product-img' />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
