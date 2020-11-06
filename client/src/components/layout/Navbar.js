import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <nav>
        <div className="nav-wrapper light-blue">
          <ul id="nav-mobile" className="">
            {this.props.auth.isAuthenticated === true &&
              <li>
                <button
                  style={{
                    width: 90,
                    marginLeft: 25,
                    borderRadius: "3px",
                    letterSpacing: "1px",
                  }}
                  onClick={this.onLogoutClick}
                  className="btn waves-effect waves-light black accent-3"
                >
                  Logout
              </button>
              </li>}
          <Link
            to="/"
            className="col s5 brand-logo center"
          >
            BayPricer
          </Link>
          </ul>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
