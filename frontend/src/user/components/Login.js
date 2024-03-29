import React from 'react'
import './Login.css'
const Login = () =>{
    return(<>
    <h2> Login Form</h2>
    <form action="/action_page.php" method="post">
  <div className="imgcontainer">
    <img src="https://www.w3schools.com/howto/img_avatar2.png" style={{width:300}} alt="Avatar" classname="avatar"/> 
  </div>
  <div className="container">
    <label labelfor="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>
    <label labelfor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>
  <div className="container" style={{backgroundColor:"#F1F1F1"}}>
    <button type="button" className="cancelbtn">Cancel</button>
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>
    </>)
}
export default Login