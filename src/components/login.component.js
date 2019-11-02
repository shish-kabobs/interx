import React, { Component } from 'react';
import './user-form.css'

export default class Login extends Component {
    render() {
        return (
            <div>
                <div className="container"> 
                        <form>
                            <div class="form-group">
                                <label for="InputUsername">Username</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="InputUsername"
                                    placeholder="Enter username"
                                    style={{ width: '15em' }}
                                    required
                                ></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" style={{width: '15em'}} required></input>
                            </div>                
                            <button type="submit" class="btn btn-outline-secondary">Submit</button>
                        </form>
                </div>
                <div className="picture">
                    <p>picture</p>
                </div>
            </div>
        )
    }
}