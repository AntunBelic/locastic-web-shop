import "./Navbar.css";
import logo from "../../images/tinel_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import DataContext, { IWorkShopProps } from "../../context/DataContext";
import { Link } from "react-router-dom";

export interface INavbarProps { }

export function Navbar(props: INavbarProps) {
    let { cart, handleOpenDrawer }: any = useContext(DataContext);
    let items: number = cart.reduce((ack: number, item: IWorkShopProps) => ack + item.amount, 0);
    let cart_description: string = "Cart is empty";

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
            <Link to="/">
                <img src={logo} alt="logo" className="logo"></img>
            </Link>
            <div className="navbar__shopping_cart_info">
                <div className="navbar__cart__icon__container" onClick={() => handleOpenDrawer()}>
                    <FontAwesomeIcon icon={faCartShopping} className="navbar__cart__icon" />
                    {items >= 1 && <span className="navbar__cart__indicator"></span>}
                </div>
                <h6 className="navbar__cart__description">{cart_description}</h6>
            </div>
        </nav>
    );
}
