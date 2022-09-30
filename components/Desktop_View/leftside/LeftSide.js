import Login from './Header/Login'
import Form from './Input_Form/Form'
import Forget from './Forget_Password/Forget'
import LoginButton from './Login_Button/LoginButton'
import Sign from './Sign_In/Sign'
import Account from './Create_Account/Account'

export default function LeftSide() {
  return (
    <div  >
        <Login/>
        <Form/>
        {/* <Forget/> */}
        {/* <LoginButton/> */}
        <Sign/>
        <Account/>
    </div>
  )
}
