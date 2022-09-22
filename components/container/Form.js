import EyeButton from "./EyeButton"
import classes from "./form.module.css"
import { useRef } from "react"

export default function Form() {
  const inputEmail = useRef();
  const inputPassword = useRef();

  return (
    <div className={classes.inputForm}>
      <form >
        <label htmlFor="email" className={classes.labelEmail}>Email</label>
        <input type="text" className={classes.inputEmail} placeholder="Loremipsum@gmail.com" ref={inputEmail} />
        <label htmlFor="email" className={classes.labelPassword}>Password</label>
        <div className={classes.eye}>
          <input type="text" className={classes.inputPassword} placeholder="JFGEFVC6337" ref={inputPassword} />
          <EyeButton />
        </div>
      </form>
    </div>
  )
}
