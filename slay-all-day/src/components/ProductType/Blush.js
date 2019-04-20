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
		height: 200,
		'background-size': 'contain'
	},
	button: {
		display: 'flex',
		'justify-content': 'space-between'
	}
};

class Blush extends React.Component {
	state = {
		filteredSearch: []
	};

	render() {
		// filter out for null values first
		console.log(this.props.products.map((product) => product.brand));
		let newArray = this.props.products.filter(function(e) {
			return e.brand === 0 || e.brand;
		});
		console.log(newArray);
		// this filter is by product type
		let filtered = newArray.filter((product) => product.product_type.includes('blush'));

		// this filter is for Search
		let filteredSearch = filtered.filter(
			(product) =>
				product.name.toLowerCase().includes(this.props.searchInput) ||
				product.brand.includes(this.props.searchInput)
		);
		const { classes } = this.props;
		return (
			<div className='foundations-list'>
				{filteredSearch.slice(0, 12).map((product) => (
					<Card className={classes.card}>
						<CardActionArea>
							<Link key={product.id} to={`/products/${product.id}`}>
								<CardMedia
									className={classes.media}
									image={product.api_featured_image}
									title={product.name}
								/>
							</Link>
							<CardContent>
								<Typography gutterBottom variant='h5' component='h2'>
									{product.brand}
								</Typography>
								<Typography component='p'>{product.name}</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions className='card-button'>
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

export default withStyles(styles)(Blush);
