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

		this.setState({
			drug1: '',
			drug2: ''
		});

		async function getIdList(val) {
			try {
				const response = await fetch(
					'https://rxnav.nlm.nih.gov/REST/approximateTerm?term=' +
						val +
						'&maxEntries=4',
					{
						headers: {
							'Access-Control-Allow-Origin': '*',
							'Content-Type': 'application/json',
							Accept: 'application/json',
							'Access-Control-Allow-Headers': '*',
							'Access-Control-Allow-Methods':
								'GET,PUT,POST,DELETE,PATCH,OPTIONS'
						}
					}
				);
				const data = await response.json();

				const rxcui = data.approximateGroup.candidate[0].rxcui;
				// console.log(rxcui);

				const response2 = await fetch(
					'https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=' +
						rxcui,
					{
						headers: {
							'Access-Control-Allow-Origin': '*',
							'Content-Type': 'application/json',
							Accept: 'application/json',
							'Access-Control-Allow-Headers': '*',
							'Access-Control-Allow-Methods':
								'GET,PUT,POST,DELETE,PATCH,OPTIONS'
						}
					}
				);
				const data2 = await response2.json();
				// console.log(data2);

				let idList = []; //[interacting rxcui, severity]
				data2.interactionTypeGroup[0].interactionType[0].interactionPair.forEach(
					num =>
						idList.push([
							num.interactionConcept[1].minConceptItem.rxcui,
							num.severity
						])
				); // [num.interactionConcept[1].minConceptItem.rxcui, num.severity]

				// console.log(idList);
				return idList;
			} catch (error) {
				console.error(error);
			}
		}

		async function getId(val) {
			try {
				const response = await fetch(
					'https://rxnav.nlm.nih.gov/REST/approximateTerm?term=' +
						val +
						'&maxEntries=4',
					{
						headers: {
							'Access-Control-Allow-Origin': '*',
							'Content-Type': 'application/json',
							Accept: 'application/json',
							'Access-Control-Allow-Headers': '*',
							'Access-Control-Allow-Methods':
								'GET,PUT,POST,DELETE,PATCH,OPTIONS'
						}
					}
				);
				const data = await response.json();

				if (data) {
					const id = data.approximateGroup.candidate[0].rxcui;
					// console.log(id);
					return id;
				}
			} catch (error) {
				console.error(error);
			}
		}

		Promise.all([getId(drugs.drug2), getIdList(drugs.drug1)]).then(
			responses => {
				if (responses[0] && responses[1]) {
					const interaction = responses[1].filter(
						drug => parseInt(drug[0]) === parseInt(responses[0])
					);
					// console.log(interaction.length > 0);

					const interactionInfo = {
						drug1: drugs.drug1,
						drug2: drugs.drug2
					};

					if (interaction.length > 0) {
						// console.log(interaction);
						interactionInfo.severity = interaction[0][1];
					} else {
						interactionInfo.severity = false;
					}
					this.props.searchInteraction(interactionInfo);
				}
			}
		);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<div className="form-group search">
						<label className="search__title" htmlFor="Search1">
							Search
						</label>
						<div>
							<input
								type="text"
								className="form-control search__bar"
								placeholder="Search a drug"
								style={{ width: '25em' }}
								value={this.state.drug1}
								onChange={this.getDrug1}
								required
							></input>
							<input
								type="text"
								className="form-control search__bar"
								placeholder="Search a drug"
								style={{ width: '25em' }}
								value={this.state.drug2}
								onChange={this.getDrug2}
								required
							></input>
						</div>
						<div id="new-searches"></div>

						<button type="submit" className="btn btn-outline-primary">
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}
