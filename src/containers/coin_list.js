import React, { Component } from 'react';
import { connect } from 'react-redux';
import { accounting } from 'accounting';

class CoinList extends Component {
	renderCoin(coinData){

		var index = coinData.percent_change_24h.index;
		console.log(index)
		return (
			<tr key={coinData.symbol}>
				<td>
					{coinData.rank}
				</td>
				<td>
					<span className={` cryptoIcon middle c_${coinData.name}`}></span>
					{coinData.name}
				</td>
				<td>
					${accounting.formatNumber(coinData.market_cap_aud)}
				</td>
				<td>
					{accounting.formatMoney(coinData.price_aud)}
				</td>
				<td>
					&nbsp;{coinData.percent_change_24h} /
					&nbsp;{coinData.percent_change_7d}

				</td>
			</tr>
		);
	}
	displayPrompt(coinData) {
		if(coinData.length === 0 ){
			return ( 
				<tr>
					<td>Search for a specific coin or token... </td>
				</tr>
			);
		}
	}
	render() {
		return (
			<div>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>#</th>
						<th>Coin Name</th>
						<th>Market Cap</th>
						<th>Price</th>
						<th>% Change (24hr/7days)</th>
					</tr>
				</thead>
				<tbody>
					{this.displayPrompt(this.props.coin)}
					{this.props.coin.map(this.renderCoin)}
				</tbody>
			</table>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Top Ten</th>
					</tr>
					<tr>
						<th>#</th>
						<th>Coin Name</th>
						<th>Market Cap</th>
						<th>Price (AUD)</th>
						<th>% Change (24hr/7days)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.topTen.map(this.renderCoin)}
				</tbody>
			</table>
			</div>
		);
	}
}

function mapStateToProps(state) { //or we can just use ES6 syntax -- mapStateToProps({ coin }) 
	return {
		coin: state.coin,
		topTen: state.topTen
	};
}

export default connect(mapStateToProps)(CoinList); // we export this because this is the 'connected' version of coin_list :)