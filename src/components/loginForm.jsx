import React, { Component } from 'react';
import _ from 'lodash';
import Cookies from 'js-cookie';
import { SHA256 } from 'crypto-js';

class LoginForm extends Component {
  state = { loginUser: { email: '', psw: '' } };

  handleChange = (e) => {
    const loginUser = { ...this.state.loginUser };
    loginUser[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ loginUser });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { registeredUsers } = this.props;
    const { loginUser } = this.state;
    const isExist = registeredUsers.filter(
      (user) => user.email === loginUser.email
    )[0];

    if (!isExist) {
      alert('Invalid user email, Please double check your email or Sign up');
      return;
    }

    const userList = [...this.props.registeredUsers];
    const user = userList.filter((user) => user.email === loginUser.email)[0];
    const isUser = _.isEqual(user.psw, loginUser.psw);
    if (isUser) {
      const hash = SHA256(loginUser.email).toString();
      Cookies.set('auth', hash);
      this.props.navigate('/');
    } else {
      alert('Invalid Password');
      return;
    }
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
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default LoginForm;
