import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
  state = {
    userDetails: {},
    registration: false,
  };

  handleChange = (e) => {
    const userDetails = { ...this.state.userDetails };
    userDetails[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ userDetails });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { userDetails } = this.state;
    const { registeredUsers, updateRegisteredUsers } = this.props;
    const isExist = registeredUsers.filter(
      (user) => user.email === userDetails.email
    )[0];

    if (userDetails.psw.length < 5) {
      alert('Password must be at least 5 character');
      return;
    }
    if (userDetails.psw !== userDetails.confPsw) {
      alert('Password and Confirm password do not match each other');
      return;
    }
    if (isExist) {
      alert('User already exists');
      return;
    }
    updateRegisteredUsers(this.state.userDetails);
    this.setState({ registration: true });
  };

  render() {
    return (
      <React.Fragment>
        <main className="container">
          <div className="d-flex justify-content-center">
            <div className="col-4 my-5 card">
              <form className="card-body" onSubmit={this.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="psw"
                    name="psw"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confPsw"
                    name="confPsw"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </form>
              {this.state.registration ? (
                <div className="alert alert-success mx-3" role="alert">
                  User Registration Successful !!{' '}
                  <Link to="/login" style={{ textDecoration: 'none' }}>
                    Log In
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default SignUp;
