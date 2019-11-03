import React, { Component } from 'react';
import './search.css';

export default class Search extends Component {



	render() {
		return (
			<div>
				<form action="">
					<div className="form-group search">
						<label className="search__bar" for="Search1">Search</label>
						<div>
							<input
							type="text"
							class="form-control"
							placeholder="Search a drug"
							style={{ width: '25em' }}
							required
							></input>
							<input
							type="text"
							class="form-control"
							placeholder="Search a drug"
							style={{ width: '25em' }}
							required
							></input>
						</div>
						<div id="new-searches"></div>
				
						<button type="submit" class="btn btn-outline-primary">Submit</button>
						
					</div>
					    
				</form>
			</div>
		);
	}
}
