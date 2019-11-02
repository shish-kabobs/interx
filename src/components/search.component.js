import React, { Component } from 'react';
import './search.css';

export default class Search extends Component {

	constructor(props) {
		super(props);
		this.addSearchField = this.addSearchField.bind(this);
	}

	addSearchField() {
		const newSearch = document.getElementById('new-searches');
		const form = document.createElement('input');
		form.required = true;
		newSearch.appendChild(form);
	}

	render() {
		return (
			<div>
				<form action="">
					<div className="form-group search">
						<label className="search__bar" for="Search1">Search</label>
						<input
							type="text"
							class="form-control"
							placeholder="Search a drug"
							style={{ width: '25em' }}
							required
						></input>
						<div id="new-searches"></div>
						<button className="search__add" onClick={this.addSearchField}>+</button>
						<button type="submit" class="btn btn-outline-primary">Submit</button>
					</div>

				</form>
			</div>
		);
	}
}
