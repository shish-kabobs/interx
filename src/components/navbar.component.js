import React, { Component } from 'react';
import ChangeLogo from './change-logo.component';
import { Link } from 'react-router-dom';
import './navbar.css';

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light navbar-expand-lg" id="navbar">
				<Link to="/">
					<ChangeLogo />
				</Link>
				<div class="navig">
					<ul className="navbar-nav mr-auto" id="navbar2">
						<li className="nav-item mr-2">
							<button className="btn btn-light" type="button">
								<Link to="/login" className="nav-link">
									Login
								</Link>
							</button>
						</li>
						<li className="navbar-item">
							<button className="btn btn-outline-success" type="button">
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
