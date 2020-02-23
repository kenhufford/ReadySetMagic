import React from 'react'
import { Link } from 'react-router-dom';
import HeaderDropdown from './HeaderDropdown';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const { currentUser, logout } = this.props;
        const HeaderBar = currentUser ? (
            <div className="header-right">
                <HeaderDropdown 
                    logout={logout}
                    currentUser={currentUser}
                    />
            </div>
        ) : (
            <div className="header-right">
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
            </div>
        );
        return(
            <div className="header-main">
                <div className="header-left">
                    GameSetMagic
                </div>
                {HeaderBar}
            </div>
        )
    }
}
export default Header