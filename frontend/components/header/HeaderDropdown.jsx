import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import onClickOutside from "react-onclickoutside";

class HeaderDropdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOpen: false
        }
    }

    handleClickOutside() {
        this.setState({
            listOpen: false
        })
    }

    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen
        }))
    }

    render() {
        let {currentUser, logout} = this.props;
        let {listOpen} = this.state;
        return (
            <div className="header-dropdown">
                <div className="header-dropdown-title"
                    onClick={() => this.toggleList()} >
                    {currentUser.username}
                    <i className="fas fa-user-circle"></i>
                </div>
                {listOpen &&
                    <ul className="create-group-card-dropdown-header-list">
                        <li onClick={logout}>Logout</li>
                    </ul>}
            </div>
        )
    }
}

export default onClickOutside(HeaderDropdown)