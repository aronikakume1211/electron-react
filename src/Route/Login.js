import React, { Component } from 'react';
import Logo from '../images/avater.png';
class Login extends Component {
  constructor(props){
    super(props);
    this. state={
      email:'',
      password:''
     }
  }
 
    validateForm=()=> {
     return this.state.email.length > 0 && this.state.password.length > 0;
   }

   onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
    console.log(this.state.email);
    
  }
  onChangePassword=(e)=>{
    this.setState({
      
      password:e.target.value
    });
  }
    handleSubmit=(event)=> {
     event.preventDefault();
     if(this.state.email =='admin' && this.state.password == 'admin'){
      this.props.history.push('/home/Home');
     }else if(this.state.email =='user' && this.state.password == 'user'){
      this.props.history.push('/admin');
     }else{
       alert("Incorrect Username or Password! try again")
     }
     
   }
  render() {
    return (
      <div style={{
       
        }}>
        <form onSubmit={this.handleSubmit}>
          <div style={{
            textAlign: "center",
            margin: "40px 0 12px 0"
          }}>
           <img src={Logo} width="100px" height="40px" style={{ float: "left", paddingLeft: "40px" }} style={{
              width: "200px",
              height:"200px",
              borderRadius: "50%"
            }} />
          </div>

          <div className="container" style={{
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            width: "40%",
            padding: "16px",
            marginLeft: "30%",
            marginRight: "50%",
            height:"100%",
            borderRadius:"20px",
            background: "radial-gradient(circle, red, yellow, green)"
          }}>
            <label><h1>Login as Admin or User</h1></label><br />
            <label ><b>Username</b></label>
            <input
              type="text"
              placeholder="Enter Username/Email"
              name="uname" required
              style={{
                width: "100%",
                padding: "12px 20px",
                margin: "8px 0",
                display: "inline-block",
                border: "1px solid #ccc",
                boxSizing: "border-box"
              }}
              onChange={this.onChangeEmail}
            />

            <label ><b>Password</b></label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              style={{
                width: "100%",
                padding: "12px 20px",
                margin: "8px 0",
                display: "inline-block",
                border: "1px solid #ccc",
                boxSizing: "border-box"
              }}
              onChange={this.onChangePassword}
            />

            <button
              type="submit"
              style={{
                backgroundColor: "#260033",
                color: "white",
                padding: "14px 20px",
                margin: "8px 0",
                border: "none",
                cursor: " pointer",
                width: "100%",
                borderRadius:"20px"
              }}
            >Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
