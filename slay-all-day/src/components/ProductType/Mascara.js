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

class Mascara extends React.Component {
	// state = {
	// 	mascaras: []
	// };
	state = {
		filteredSearch: []
	};

	// componentDidMount() {
	// 	const api = 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=mascara';
	// 	axios
	// 		.get(api)
	// 		.then((res) => {
	// 			console.log(res.data);
	// 			this.setState({ mascaras: res.data });
	// 		})
	// 		.catch((err) => console.error(err));
	// }

	render() {
		let filtered = this.props.products.filter((product) =>
			product.product_type.includes('mascara')
		);
		let filteredSearch = filtered.filter(
			(product) =>
				product.name.toLowerCase().includes(this.props.searchInput) ||
				product.brand.includes(this.props.searchInput)
		);
		const { classes } = this.props;
		return (
			<div className='foundations-list'>
				{filteredSearch.slice(0, 15).map((product) => (
					<Card className={classes.card}>
						<CardActionArea>
							<a href={product.product_link}>
								<CardMedia
									className={classes.media}
									// image={product.image_link}
									image={product.api_featured_image}
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
						<CardActions className='card-button'>
							<Link key={product.id} to={`/products/${product.id}`}>
								<Button size='small' color='primary'>
									{product.brand}
								</Button>
							</Link>
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

export default withStyles(styles)(Mascara);
