import { Link } from "react-router-dom"
import "./header.css";
export const Header = () => {

    return (
        <>
            <header>
                <h1>MyShop</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Product">Product</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Cart">Cart</Link></li>
                </ul>

            </header>
        </>
    )
}