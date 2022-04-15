import "./Navbar.css";
import logo from "../../images/tinel_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export interface INavbarProps { }

export function Navbar(props: INavbarProps) {
    let items = 1;
    let cart_description = "Cart is empty";

    switch (items) {
        case 0:
            cart_description = "Cart is empty";
            break;
        case 1:
            cart_description = `${items} Workshop in Cart`;
            break;
        default:
            cart_description = `${items} Workshops in Cart`;
    }

    return (
        <nav className="navbar__container">
            <div>
                <img src={logo} alt="logo" className="logo"></img>
            </div>
            <div className="navbar__shopping_cart_info">
                <div className="cart__icon__container">
                    <FontAwesomeIcon icon={faCartShopping} className="cart__icon" />
                    {items >= 1 && <span className="cart__indicator"></span>}
                </div>
                <h6 className="cart__description">{cart_description}</h6>
            </div>
        </nav>
    );
}
