import React from "react"
import { Helmet } from "react-helmet"

export default function registration() {
  return (
     <main>
       <Helmet>
         <title>Registration</title>
         <meta name = "description" content="Registration page" />
        </Helmet>
    <div className='registration'>
       <h2>Registration Form</h2>
    <form>
     <div>
      <div>
        <label className="fname">First Name</label> 
        <input type="text" name="fname" required/>
      </div>
      <div>
        <label className="lname">Last Name</label>
        <input type="text" name="lname" required/>
      </div>
      <div>
        <label className="email">Email</label>
      <input type="email" name="email" required/>
      </div>
        <label className="pass">Password</label>
        <input type="password" name="pass" required/>
        <label className="cpass">Confirm Password</label>
        <input type="password" name="cpass" required/>
        <button type="submit">Register</button>
        <br/>
     </div>
    </form>
   </div>
 </main>
  )
}
