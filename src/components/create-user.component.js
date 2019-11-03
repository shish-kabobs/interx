import React, { Component } from 'react';
import axios from 'axios';
import './user-form.css';
import pills from '../images/pills.PNG';

export default class CreateUser extends Component {
	constructor(props) {
        super(props);
        
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			name: '',
			email: '',
			password: ''
		};
    }
    
    onChangeName(e) {
        this.setState({
            name: e.target.value
        }) 
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        }) 
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        }) 
    }

	onSubmit(e) {
		e.preventDefault();

		const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
		}

        console.log(user);

		axios.post('http://localhost:5000/users/add', user)
			.then(res => console.log(res.data));
		console.log("success!")
		this.setState({
            name: '',
            email: '',
            password: ''
		})
	}

	render() {
		return (
			<div>
				<div className="container">
					<form onSubmit={this.onSubmit}>
						<div class="form-group">
							<label for="Name">Name</label>
							<input
								type="text"
								class="form-control"
                                id="InputName"
                                value={this.state.name}
                                onChange={this.onChangeName}
								placeholder="Enter name"
								style={{ width: '15em' }}
								required
							></input>
						</div>
						<div class="form-group">
							<label for="exampleInputEmail1">Email address</label>
							<input
								type="email"
								class="form-control"
                                id="exampleInputEmail1"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
								aria-describedby="emailHelp"
								placeholder="Enter email"
								style={{ width: '15em' }}
								required
							></input>
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Password</label>
							<input
								type="password"
								class="form-control"
                                id="exampleInputPassword1"
                                value={this.state.password}
                                onChange={this.onChangePassword}
								placeholder="Password"
								style={{ width: '15em' }}
								required
							></input>
						</div>
						<button type="submit" class="btn btn-outline-secondary" value="Create User">
							Submit
						</button>
					</form>
				</div>
				<figure className="picture">
                    <img src={pills} alt='scattered pills' />
                </figure>
			</div>
		);
	}
}


/*
import React, { Component } from 'react';
import axios from 'axios';
import './user-form.css';

export default class CreateUser extends Component {
	constructor(props) {
        super(props);
        
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			name: '',
			email: '',
			password: ''
		};
    }
    
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        }) 
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        }) 
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        }) 
    }

	onSubmit(e) {
		e.preventDefault();

		const user = {
            name: this.state.username,
            email: this.state.email,
            password: this.state.password
		}

        console.log(user);

		axios.post('http://localhost:5000/users/add', user)
			.then(res => console.log(res.data));

		this.setState({
            username: '',
            email: '',
            password: ''
		})
	}

	render() {
		return (
			<div>
				<div className="container">
					<form onSubmit={this.onSubmit}>
						<div class="form-group">
							<label for="InputUsername">Username</label>
							<input
								type="text"
								class="form-control"
                                id="InputUsername"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
								placeholder="Enter username"
								style={{ width: '15em' }}
								required
							></input>
						</div>
						<div class="form-group">
							<label for="exampleInputEmail1">Email address</label>
							<input
								type="email"
								class="form-control"
                                id="exampleInputEmail1"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
								aria-describedby="emailHelp"
								placeholder="Enter email"
								style={{ width: '15em' }}
								required
							></input>
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Password</label>
							<input
								type="password"
								class="form-control"
                                id="exampleInputPassword1"
                                value={this.state.password}
                                onChange={this.onChangePassword}
								placeholder="Password"
								style={{ width: '15em' }}
								required
							></input>
						</div>
						<button type="submit" class="btn btn-outline-secondary" value="Create User">
							Submit
						</button>
					</form>
				</div>
				<figure className="picture">
                    <img src={pills} alt='scattered pills' />
                </figure>
			</div>
		);
	}
}
*/