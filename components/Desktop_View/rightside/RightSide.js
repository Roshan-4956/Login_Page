import Box1 from "./Shortsqueeze/Box1"
import Box2 from "./Design/Box2"
import classes from "./rightside.module.css"

export default function RightSide() {
  return (
    <div className={classes.rightsideWrap}>
      <div className={classes.rightside}>
        <Box1 />
        <Box2 />
      </div>
    </div>
  )
}
