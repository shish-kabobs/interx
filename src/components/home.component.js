import React, { Component } from 'react';
import Search from './search.component';

export default class Home extends Component {
	state = {
		drug1: null,
		drug2: null,
		severity: null
	};

	uppercase = string => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	searchInteraction = ({ drug1, drug2, severity }) => {
		if (severity === false) {
			this.setState({
				drug1,
				drug2,
				severity
			});
		} else {
			this.setState({
				drug1,
				drug2,
				severity
			});
		}
	};

	render() {
		if (this.state.severity === false) {
			return (
				<div>
					<Search searchInteraction={this.searchInteraction} />
					<br></br>
					<h2 className="text-center">
						{`No interaction found between ${this.uppercase(
							this.state.drug1
						)} and ${this.uppercase(this.state.drug2)}`}
						!
					</h2>
				</div>
			);
		}

		if (this.state.drug1) {
			return (
				<div>
					<Search searchInteraction={this.searchInteraction} />
					<br></br>
					<h2 className="text-center">
						<span style={{ color: '#e74c3c' }}>
							{this.uppercase(this.state.drug1)}
						</span>
						&nbsp;interacts with&nbsp;
						<span style={{ color: '#3498db' }}>
							{this.uppercase(this.state.drug2)}
						</span>&nbsp;
						with a severity of&nbsp;
						{this.state.severity}!
					</h2>
				</div>
			);
		}

		if (!this.state.drug1) {
			return (
				<div>
					<Search searchInteraction={this.searchInteraction} />
					<div className="text-center">
						<p>
							<br />
							inteRX is a web application which allows user to look up drugs
							interactions.
						</p>
					</div>
				</div>
			);
		}
	}
}
