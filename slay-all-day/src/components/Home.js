// import React, { Component } from 'react';
// import axios from 'axios';
// import Products from './ProductsList';

// class Home extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			products: []
// 		};
// 	}
// 	componentDidMount() {
// 		const api = 'http://makeup-api.herokuapp.com/api/v1/';
// 		axios
// 			.get(`${api}products.json`)
// 			.then((res) => {
// 				console.log(res.data);
// 				// console.log(res.status);
// 				this.setState({ products: res.data });
// 				// this.setState({ products: [...this.state.products, ...data.results] });
// 			})
// 			.catch((err) => console.error(err));
// 	}

// 	render() {
// 		return (
// 			<div className='App'>
// 				<Products products={this.state.products} />
// 			</div>
// 		);
// 	}
// }

// export default Home;

// // <Route exact path='/foundation' render={() => <Foundation />} />

import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
	card: {
		width: '31%',
		height: '350px',
		'min-width': '300px',
		margin: '0 0 15px 1.75%'
	},
	media: {
		height: 200
	},
	button: {
		display: 'flex',
		'justify-content': 'space-between'
	}
};

class Home extends React.Component {
	state = {
		products: []
	};

	componentDidMount() {
		const api = 'https://makeup-api.herokuapp.com/api/v1/products.json';
		axios
			.get(api)
			.then((res) => {
				console.log(res.data);
				this.setState({ products: res.data });
			})
			.catch((err) => console.error(err));
	}

	render() {
		const { classes } = this.props;
		return (
			<div className='foundations-list'>
				{this.state.products.slice(0, 12).map((product) => (
					<Card className={classes.card} key={product.id}>
						<CardActionArea>
							<a href={product.product_link}>
								<CardMedia
									className={classes.media}
									image={product.image_link}
									title={product.name}
								/>
							</a>
							<CardContent>
								<Typography gutterBottom variant='h5' component='h2'>
									{product.brand}
								</Typography>
								<Typography component='p'>{product.name}</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<a href={product.product_link}>
								<Button size='small' color='primary'>
									{product.brand}
								</Button>
							</a>
							<Button size='small' color='primary'>
								${product.price}0
							</Button>
						</CardActions>
					</Card>
				))}
			</div>
		);
	}
}

export default withStyles(styles)(Home);
