import classes from "./account.module.css"
export default function Account() {
  return (
    <div className={classes.account}>
        <span className={classes.register}>Not registered yet?</span>
        <button className={classes.create}>Create an Account</button>
    </div>
  )
}
