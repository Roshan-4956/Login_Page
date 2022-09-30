import Home from './Mobile_View/Home';
import { CookiesProvider } from "react-cookie";
export default function Mobile() {
    return (
        <CookiesProvider>
            <Home />
        </CookiesProvider>
    )
}
