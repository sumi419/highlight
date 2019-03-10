import React, { Component } from 'react';

export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			carouselData: [
				'https://media.self.com/photos/57e00e471db118765d302bdd/4:3/w_768,c_limit/sub-channel-beauty_makeup.jpg',
				'../slay-all-day/src/components/images/pink.jpg',
				'slay-all-day/src/components/images/pinkclouds.jpg'
			],
			index: 0
		};
	}

	componentDidMount() {
		this.previewCarousel();
		// let image = this.state.carouselData.map((img) => console.log(img));
	}

	leftClick = () => {
		let index = this.state.index;
		// console.log(index);

		const imagesLength = this.state.carouselData.length;
		console.log(imagesLength);
		console.log(this.state.carouselData[index]);
		if (index === 0) {
			index = imagesLength - 1;
			this.setState({ index });
		} else {
			index -= 1;
			this.setState({ index });
		}
	};

	rightClick = () => {
		let index = this.state.index;
		const imagesLength = this.state.carouselData.length;

		if (index === imagesLength - 1) {
			index = 0;
			this.setState({ index });
		} else {
			index += 1;
			this.setState({ index });
		}
	};

	selectedImage = (idx) => {
		return <img src={this.state.carouselData[idx]} style={{ display: 'block' }} alt='img' />;
	};

	previewCarousel = () => {
		let index = this.state.index;
		const imagesLength = this.state.carouselData.length;

		setInterval(() => {
			if (index === imagesLength - 1) {
				index = 0;
				return this.setState({ index });
			}

			index += 1;
			this.setState({ index });
		}, 3000);
	};

	render() {
		return (
			<div className='carousel'>
				<div className='left-button' onClick={this.leftClick}>
					{'<'}
				</div>
				{this.selectedImage(this.state.index)}
				{/* {this.previewCarousel()} */}
				<div className='right-button' onClick={this.rightClick}>
					{'>'}
				</div>
			</div>
		);
	}
}
