import Account from "./Account"
import Forget from "./Forget"
import Form from "./Form"
import classes from "./home.module.css"
import Login from "./Login"
import LoginButton from "./LoginButton"
import Sign from "./Sign"

export default function Home() {
  return (
     <div className={classes.container}>
            <Login/>
            <Form/>
            <Forget/>
            <LoginButton/>
            <Sign/>
            <Account/>
     </div>
  )
}
