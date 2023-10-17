import React from "react";
import '../Styles/Login.css'
export const Login = () => {
  return (
     
    
    
    <div className="p1">
       <div class="tex">
      <h1>facebook</h1>
      <h4>facebook Connect with friends and the worls </h4>
      <h4>around you on Facebook</h4>
        </div>

         

        <div className="f1">
       
       

       <form className="form1">
        <div className="ipt">
       <div>
               <input placeholder="Email address or phone number" className="in"></input>

       </div>
     <div>
              <input type="password" placeholder=" Password" className="in"></input>

     </div>
     </div>
   
     

       <button type="button"><b>Log in</b></button>
       <br></br>
      <a href="#">Forgotten password?</a>
      <hr></hr>
      <button className="b2"><b>Creat new account</b></button>
     </form>
     
     <div className="p3"><b><a href="#">Create a Page</a></b> for a celebrity, brand or business.</div>
     </div>
        
     </div>
  );
};

