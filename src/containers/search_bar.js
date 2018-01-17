import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCoin } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onInputChange(event) {
		this.setState({ term : event.target.value });
	}
	onFormSubmit(event) {
		event.preventDefault();
		//Fetch coin data
		fetchCoin(this.state.term); //why is the action creator in props? 
		this.setState({ term: '' });
	}
	render() {
		//className is from boot-strap js.
		//form tag is good as you get submit functionality by default
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Search for coin or token"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchCoin }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);