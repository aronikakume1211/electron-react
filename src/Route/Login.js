import React, { Component } from 'react';
import logo from '../images/logo.png';
import './App.css';
import DataStore from 'nedb';
let database, oldpass;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'admin',
      password: '',
      isCreateAccount: false,
      username: '',
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      storeAccount: []
    }
  }

  loadData = () => {
    database = new DataStore('../adminUserAccount.db');
    database.loadDatabase(err => {
      if (err) console.log(err)
    })
    database.find({}, (err, docs) => {
      if (err) console.log(err)
      else {
        this.setState({
          storeAccount: docs
        });
        console.log(this.state.storeAccount);
      }
    })
  }
  componentDidMount() {
    this.loadData()
  }
  validateForm = () => {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }
  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  onChangeNewPassword = (e) => {
    oldpass = e.target.value;
    this.setState({
      newPassword: e.target.value
    })
  }
  onChangeConfirmPass = (e) => {
    this.setState({
      confirmPassword: e.target.value
    })
  }
  onChangeOldPassword = (e) => {

    this.setState({
      oldPassword: e.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let result = this.state.storeAccount.filter(item => item.username === this.state.email)
      .filter(item => item.newPassword === this.state.password);
    console.log(result);

    if (this.state.email === 'admin') {
      result = this.state.storeAccount.filter(item => item.newPassword === this.state.password);
      if (result.length > 0) {
        this.props.history.push('/home/Home');
      } else {
        alert("ይለፍ ቃል ተሳስተዋል! እንደገና ይሞክሩ!")
      }
    } else if (this.state.email === 'user') {
      result = this.state.storeAccount.filter(item => item.newPassword === this.state.password);
      if (result.length > 0) {
        this.props.history.push('/user');
      } else {
        alert("ይለፍ ቃል ተሳስተዋል! እንደገና ይሞክሩ!")
      }
    } else {
      alert("Username ተሳስተዋል! እንደገና ይሞክሩ!")
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      username: this.state.username,
      newPassword: this.state.newPassword,
      confirmPassword: this.state.confirmPassword
    }
    const { username, newPassword, confirmPassword } = obj;
    if (username === '' || newPassword === '' || confirmPassword === '') {
      alert("መጀመሪያ በትክክል ይሙሉ!")
    } else {
      if (username === 'admin' || username === 'user') {
        if (newPassword !== confirmPassword) {
          alert("እባክዎ ተመሳሳይ 'password' ያስገቡ!")
        } else {
          if (username === 'admin') {
            let result = this.state.storeAccount.filter(item => item.username === 'admin')
              .filter(item => item.newPassword === this.state.oldPassword);
            if (result.length > 0) {
              database.update({ username: 'admin' }, { $set: obj }, (err, res) => {
                if (err) console.log(err)
                else {
                  this.loadData()
                  alert("Updated!")
                  console.log(result);
                  this.setState({
                    isCreateAccount: false
                  })
                }
              })
            } else {
              database.insert(obj, (err, res) => {
                if (err) {
                  console.log(err);
                } else {
                  this.loadData()
                  alert(`Account Created! username: ${this.state.username} password: ${this.state.newPassword}`);
                  this.setState({
                    isCreateAccount: false
                  })
                }
              })
            }
          } else if (username === 'user') {
            let result = this.state.storeAccount.filter(item => item.username === 'user')
              .filter(item => item.newPassword === this.state.oldPassword);
            if (result.length > 0) {
              database.update({ username: 'user' }, { $set: obj }, (err, res) => {
                if (err) console.log(err)
                else {
                  this.loadData()
                  alert("Updated!");
                  console.log(obj);
                  this.setState({
                    isCreateAccount: false
                  })
                }
              })
            } else {
              database.insert(obj, (err, res) => {
                if (err) {
                  console.log(err);
                } else {
                  this.loadData()
                  alert(`Account Created! username: ${this.state.username} password: ${this.state.newPassword}`);
                  this.setState({
                    isCreateAccount: false
                  })
                }
              })
            }
          }
        }
      } else {
        alert("እባክዎ መለያ ስምዎን 'admin' ወይም 'user' ያስገቡ!")
      }
    }
  }
  handleCancel = () => {
    this.setState({
      isCreateAccount: false
    })
  }
  _renderCreateAccount = () => {
    if (this.state.isCreateAccount) {
      return (
        <div className="login">
          <header className="App-header">
            <div><button onClick={this.handleCancel} className=" btn btn-danger glyphicon glyphicon-remove-circle" style={{ padding: "2%", float: "right" }}></button></div>
            <p>Create/Change account</p>
            <form onSubmit={this.onSubmit} style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding:"5%"}}>
              <div className="form-group">
                <input
                  placeholder="Username"
                  type="text"
                  className="form-control"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="old Password"
                  type="password"
                  className="form-control"
                  value={this.state.oldPassword}
                  onChange={this.onChangeOldPassword}
                />

              </div>
              <div className="form-group">
                <input
                  placeholder="new Password"
                  type="password"
                  className="form-control"
                  value={this.state.newPassword}
                  onChange={this.onChangeNewPassword}
                />
              </div>

              <div className="form-group">
                <input
                  placeholder="confirm password"
                  type="password"
                  className="form-control"
                  value={this.state.confirmPassword}
                  onChange={this.onChangeConfirmPass}
                />
              </div>
              <button
                className="btn btn-primary"
                type="submit"
              >Change Password</button>
            </form>
          </header>
        </div>
      )
    }
  }
  render() {
    return (
      this.state.isCreateAccount ?
        <div>
          {this._renderCreateAccount()}
        </div>
        :
        <div className="login">
          <header className="App-header">

            <img src={logo} className="App-logo" alt="logo" />
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  style={{
                    color: 'black',
                    backgroundColor: '#fefefe',
                  }}
                  type="text"
                  placeholder="Enter Username"
                  className="username"
                  value={this.state.email}
                  name="uname" required
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="form-group">

                <input
                  style={{
                    color: 'black',
                    backgroundColor: '#fefefe',
                  }}
                  type="password"
                  placeholder="Enter Password"
                  className="password"
                  name="psw"
                  required
                  onChange={this.onChangePassword}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary glyphicon glyphicon-step-forward"
              >Login</button>
              <p style={{
                color: "blue",
                cursor: "pointer"
              }} onClick={() => this.setState({ isCreateAccount: true })}>Change Password</p>
            </form>
          </header>
        </div>
    );
  }
}

export default Login;
