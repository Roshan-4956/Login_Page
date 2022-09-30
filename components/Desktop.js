
import Homepage from "./Desktop_View/Homepage";
import { CookiesProvider } from "react-cookie";

export default function Desktop() {
  return (
    <CookiesProvider>
      <Homepage />
    </CookiesProvider>
  )
}
