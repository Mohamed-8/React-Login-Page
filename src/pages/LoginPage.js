import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
  <main>
    <Helmet>
      <title>Login</title>
      <meta name = "description" content = "Login page" />
    </Helmet>
  <div className='login'>
   <h2>Login Form</h2>
  <form>
   <div>
    <label className="uname">Username</label>
    <input type="text" name="uname" required/>
    <label className="psw">Password</label>
    <input type="password" name="psw" required/>
    <button type="submit">Login</button>
   </div>
   <div class="container" >
    <button type="button" class="cancelbtn">Cancel</button>
    <span className="psw">Forgot <a href="#">password?</a></span>
    <br/>
    <div className="create">Don't have an Account yet?<Link to ="/registration">create one!</Link></div>
   </div>
  </form>
  </div>
  </main>
  )
}