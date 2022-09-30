import EyeButton from "../Eye_Button/EyeButton"
import classes from "./form.module.css"
import { useRef, useState } from "react"
import Forget from "../Forget_Password/Forget";
import LoginButton from "../Login_Button/LoginButton";
import { LogInURL } from "../../../constants";
// import Cookies from "react-cookies";
import { useCookies } from "react-cookie";


export default function Form() {
  const [isHidden,setIsHidden]=useState(true);
  const inputEmail = useRef();
  const inputPassword = useRef();
  const [cookie,setCookie]= useCookies("token");
  
  async function HandleSubmit() {
    
    console.log("submit");
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": inputEmail.current.value,
      "password": inputPassword.current.value
    });
    console.log(raw);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    console.log(LogInURL);
    var response = await fetch(LogInURL, requestOptions)
    if (response.ok) {
      const data = await response.json();
      console.log(data.key);
      setCookie("token", data.key, {
        path: "/",
        maxAge: 2592000,
        sameSite: true,
      });
    }

  }

  var hid= isHidden? "password" : "text";
  function HandleChange(){
    setIsHidden((prev)=>(!prev));
  }

  return (
    <>
      <div className={classes.inputForm}>
          <label htmlFor="email" className={classes.labelEmail}>Email</label>
          <input type="text" className={classes.inputEmail} placeholder="Enter email address" ref={inputEmail} />
          <label htmlFor="email" className={classes.labelPassword}>Password</label>
          <div className={classes.eye}>
            <input type={hid} className={classes.inputPassword} placeholder="Enter Password" ref={inputPassword} />
            <EyeButton onclick={HandleChange}/>
          </div>
      </div>
      <Forget />
      <LoginButton onclick={HandleSubmit} />
    </>
  )
}
