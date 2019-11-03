import React, { Component } from 'react';
import './search.css';

export default class Search extends Component {
	constructor(props) {
		super(props);

		this.getDrug1 = this.getDrug1.bind(this);
		this.getDrug2 = this.getDrug2.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			drug1: '',
			drug2: ''
		};
	}

	getDrug1(e) {
		this.setState({
			drug1: e.target.value
		});
	}

	getDrug2(e) {
		this.setState({
			drug2: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const drugs = {
			drug1: this.state.drug1,
			drug2: this.state.drug2
		};

		console.log(drugs);

		this.setState({
			drug1: '',
			drug2: ''
		});

		async function drugData(val) {
			const response = await fetch(
				"https://rxnav.nlm.nih.gov/REST/approximateTerm?term=" + val + "&maxEntries=4",
				{
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json'
					}
				}
			);
			const data = await response.json();
			console.log(data);

			const rxcui = data.approximateGroup.candidate[0].rxcui;
			console.log(rxcui);

			const response2 = await fetch("https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=" + rxcui, {
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			});
			const data2 = await response2.json();
			console.log(data2);
		}

		drugData(drugs.drug1);
		drugData(drugs.drug2);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<div className="form-group search">
						<label className="search__title" for="Search1">
							Search
						</label>
						<div>
							<input
								type="text"
								class="form-control search__bar"
								placeholder="Search a drug"
								style={{ width: '25em' }}
								value={this.state.drug1}
								onChange={this.getDrug1}
								required
							></input>
							<input
								type="text"
								class="form-control search__bar"
								placeholder="Search a drug"
								style={{ width: '25em' }}
								value={this.state.drug2}
								onChange={this.getDrug2}
								required
							></input>
						</div>
						<div id="new-searches"></div>

						<button type="submit" class="btn btn-outline-primary">
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}
