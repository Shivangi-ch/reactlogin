import React from "react";


export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      username:"",
      password:"",
      usernameError:"",
      passwordError:"",

    }
  }
  valid()
  {
if(!this.state.username && this.state.password.length<8)
{
  this.setState({usernameError:"*Field is required ",passwordError:"*Password should be more than 8 characters"})
}
 else if(!this.state.username)
{
  this.setState({usernameError:"*Field is required "})
}
 else if( this.state.password.length<8)
{
  this.setState({passwordError:"*Password should be more than 8 characters"})
}
else{
  return true
}
  }
  submit()
  {
    this.setState({usernameError:"",passwordError:""})
    if(this.valid())
    {
      alert('submit')
    }
   
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={(event)=>{this.setState({username:event.target.value})}} />
              <p style={{color:"red",fontSize:"13px",marginTop:"-20px"}}>{this.state. usernameError}</p>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={(event)=>{this.setState({password:event.target.value})}} />
              <p style={{color:"red",fontSize:"13px",marginTop:"-20px"}}>{this.state.passwordError}</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <button  onClick={()=>this.submit()}  className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}