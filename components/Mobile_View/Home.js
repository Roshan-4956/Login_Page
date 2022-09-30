import Account from "./Create_Account/Account"
import Forget from "./Forget_Password/Forget"
import Form from "./Input_Form/Form"
import classes from "./home.module.css"
import Login from "./Header/Login"
import LoginButton from "./Login_Button/LoginButton"
import Sign from "./Sign_In/Sign"

export default function Home() {
  return (
     <div className={classes.container}>
            <Login/>
            <Form/>
            {/* <Forget/>
            <LoginButton/> */}
            <Sign/>
            <Account/>
     </div>
  )
}
