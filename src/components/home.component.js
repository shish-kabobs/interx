import React, { Component } from 'react';
import Search from './search.component';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Search/>
				<div class="text-center">
					<p>
						<br/>inteRX is a web application which allows user to look up drugs interactions. 
					</p>
				</div>
			</div>
		);
	}
}
