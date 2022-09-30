import classes from "./eyebutton.module.css"

export default function EyeButton(props) {
  return (
      <button className={classes.eyeButton} onClick={props.onclick}>
        <img src="../images/icons/Vector.png" alt="" />
      </button>
  )
}
