import "./ShoppingCart.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCartItem } from './shoppingCartItem/ShoppingCartItem';

export interface IShoppingCardProps {
}

export function ShoppingCard(props: IShoppingCardProps) {
    let items = 1;
    let cart_description = "Cart is empty";

    switch (items) {
        case 0:
            cart_description = `${items} Workshop`;
            break;
        case 1:
            cart_description = `${items} Workshop`;
            break;
        default:
            cart_description = `${items} Workshops`;
    }
    return (
        <div className='shopping__cart'>
            <div className="shopping__cart__title">
                <div className="cart__icon__container">
                    <FontAwesomeIcon icon={faCartShopping} className="cart__icon" />
                    {items >= 1 && <span className="cart__indicator"></span>}
                </div>
                <h6 className="cart__description">{cart_description}</h6>
            </div>
            <FontAwesomeIcon icon={faXmark} className="close__btn" />
            <ul>
                <ShoppingCartItem />
                <ShoppingCartItem />
            </ul>
            <div className="shopping__cart__price">
                <span className="shopping__cart__subtotal">SUBTOTAL</span>
                <div className="shopping__cart__subtotal">
                    <h3 className="shopping__cart__price__number">4000,00</h3><h6 className="shopping__cart__price__text">EUR</h6>
                </div>
            </div>
            <button className="shopping__cart__btn">Checkout</button>
        </div>
    );
}
