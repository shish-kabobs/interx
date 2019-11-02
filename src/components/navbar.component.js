import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light navbar-expand-lg">
				<Link to="/" className="navbar-brand">
					<img src={logo} style={{width: '7rem'}}/>
				</Link>
				<div className="collpase navbar-collapse">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<button className="btn btn-light" type="button">
								<Link to="/login" className="nav-link">
									Login
								</Link>
							</button>
						</li>
						<li className="navbar-item">
							<button className="btn btn-success" type="button">
								<Link to="/users/add" className="nav-link">
									Sign up
								</Link>
							</button>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
