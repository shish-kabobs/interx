import React, { Component } from 'react';
import axios from 'axios';
import './user-form.css';
import pillsclosed from '../images/pillsclosed.png';

export default class Login extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username: '',
          password: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
          username: e.target.value
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
            username: this.state.username,
            password: this.state.password
        }
    
        console.log(user);
    
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));
    
        this.setState({
            username: '',
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
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password"
                                    class="form-control"
                                    id="exampleInputPassword1"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    placeholder="Password"
                                    style={{width: '15em'}}
                                    required></input>
                            </div>                
                            <button type="submit" class="btn btn-outline-secondary" value="Create User">Submit</button>
                        </form>
                </div>
            
                <figure className="picture">
                    <img src={pillsclosed} alt='organized pills' />
                </figure>
            </div>
        )
    }
}