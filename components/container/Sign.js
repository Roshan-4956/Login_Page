import classes from "./sign.module.css"
export default function Sign() {
  return (
    <>
    <div className={classes.sign}>
        <hr className={classes.hr}/>
        <div className={classes.signIn}>or Sign in with Google</div>
        <hr className={classes.hr}/>
    </div>
    <button className={classes.google}>
        <img src="../images/Google.png" alt="error" className={classes.googleImg} />
        <span className={classes.signGoogle}>Sign in with Google</span>
    </button>
    </>
  )
}
