import classes from "./loginbutton.module.css"
export default function LoginButton(props) {
  return (
    <button className={classes.loginButton} onClick={props.onclick}>
        Login
    </button>
  )
}
