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
		maxWidth: 345,
		margin: 30
	},
	media: {
		height: 140
	}
};

class Foundation extends React.Component {
	state = {
		foundations: []
	};

	componentDidMount() {
		const api = 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation';
		axios
			.get(api)
			.then((res) => {
				console.log(res.data);
				this.setState({ foundations: res.data });
			})
			.catch((err) => console.error(err));
	}

	render() {
		const { classes } = this.props;
		return (
			<div className='foundations-list'>
				{this.state.foundations.slice(0, 10).map((product) => (
					<Card className={classes.card}>
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
									{product.name}
								</Typography>
								<Typography component='p'>{product.brand}</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size='small' color='primary'>
								{product.brand}
							</Button>
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

// <div key={product.id} className='products-card'>
// <h1>{product.name}</h1>
// <div>
// 	<p>{product.brand}</p>
// 	<p>{product.product_link}</p>
// 	<img src={product.image_link} alt='product-img' />
// </div>
// </div>

export default withStyles(styles)(Foundation);
