
import React from "react";


export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      username:"",
      password:"",
      email:"",
      usernameError:"",
      passwordError:"",
      emailError:"",

    }
  }
  valid()
  {
if(!this.state.username && this.state.password.length<8 && !this.state.email.includes('@'))
{
  this.setState({usernameError:"*Field is required ",passwordError:"*Password should be more than 8 characters",emailError:"*Enter a valid email"})
}
if( this.state.password.length<8 && !this.state.email.includes('@'))
{
  this.setState({passwordError:"*Password should be more than 8 characters",emailError:"*Enter a valid email"})
}
if(!this.state.username &&  !this.state.email.includes('@'))
{
  this.setState({usernameError:"*Field is required ",emailError:"*Enter a valid email"})
}
if(!this.state.username && this.state.password.length<8)
{
  this.setState({usernameError:"*Field is required ",passwordError:"*Password should be more than 8 characters"})
}
if( !this.state.email.includes('@'))
{
  this.setState({emailError:"*Enter a valid email"})
}
if(!this.state.username)
{
  this.setState({usernameError:"*Field is required "})
}
if(this.state.password.length<8)
{
  this.setState({passwordError:"*Password should be more than 8 characters"})
}



else{
  return true
}
  }
  submit()
  {
    this.setState({usernameError:"",passwordError:"",emailError:""})
    if(this.valid())
    {
      alert('submit')
    }
   
  }

  render() {
    return (
      <div className="base-container">
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
          
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={(event)=>{this.setState({username:event.target.value})}} />
              <p style={{color:"red",fontSize:"13px",marginTop:"-20px"}}>{this.state. usernameError}</p>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email"  onChange={(event)=>{this.setState({email:event.target.value})}} />
              <p style={{color:"red",fontSize:"13px",marginTop:"-20px"}}>{this.state.emailError}</p>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={(event)=>{this.setState({password:event.target.value})}} />
              <p style={{color:"red",fontSize:"13px",marginTop:"-20px"}}>{this.state.passwordError}</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <button onClick={()=>this.submit()} type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}