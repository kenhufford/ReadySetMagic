import React, {Component} from 'react';

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
            <div>
              <ul>
                  {
                      this.props.errors.map(error => {
                        return <li>{error}</li>
                      })
                  }
              </ul>
            <h1>{this.props.formType}</h1>
            <form onSubmit={this.handleSubmit}>
              {this.props.formType === "Signup" ? 
              <div>
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
                <input type="password" value={password} onChange={this.handleInput("password")}/>
              </label>
              <input type="submit" value={this.props.formType}/>
            </form>
          </div>
        )
    }

}
