import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './navbar.css'

export default class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light navbar-expand-lg">
				<div class="logo">
					<Link to="/" className="navbar-brand">
						<img src={logo} style={{width: '7rem'}} alt="inteRX"/>
					</Link>
				</div>
				<div class="navig">
					<ul className="navbar-nav mr-auto">
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
