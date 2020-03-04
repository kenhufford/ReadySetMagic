import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            firstName: "",
            lastName: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleInput(field){
        return e => {
            this.setState({
                [field]: e.target.value
            })
        }
   }

    render(){
        const {username, password, email, firstName, lastName} = this.state
        return (
          <div className="session-div">
            <div className="big-text">Sign Up</div>
            <div className="side-by-side">
              <p className="small-text">Already have an account?</p>
              <Link
                className="link-text" 
                to="/login">Log in</Link>
            </div>
            <ul>
              {this.props.errors.map(error => {
                return <li>{error}</li>
              })}
            </ul>

            <form onSubmit={this.handleSubmit}>
              {this.props.formType === "Signup" ?
                <div className="top-to-bottom">
                  <label>
                    Email
                  <input type="text" value={email} onChange={this.handleInput("email")} />
                  </label>
                  <label>
                    First Name
                  <input type="text" value={firstName} onChange={this.handleInput("firstName")} />
                  </label>
                  <label>
                    Last Name
                  <input type="text" value={lastName} onChange={this.handleInput("lastName")} />
                  </label>
                </div>
                :
                <div></div>
              }
              <label>
                Username
              <input type="text" value={username} onChange={this.handleInput("username")} />
              </label>
              <label>
                Password
              <input type="password" value={password} onChange={this.handleInput("password")} />
              </label>
              <input type="submit" value={this.props.formType} />
            </form>
          </div>
        )
    }

}
