import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCartItem } from './shoppingCartItem/ShoppingCartItem';

export interface IShoppingCardProps {
}

export function ShoppingCard(props: IShoppingCardProps) {
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
        <div className='shopping__cart'>
            <div className="shopping__cart__title">
                <div className="cart__icon__container">
                    <FontAwesomeIcon icon={faCartShopping} className="cart__icon" />
                    {items >= 1 && <span className="cart__indicator"></span>}
                </div>
                <h6 className="cart__description">{cart_description}</h6>
            </div>
            <button className='close__btn'>X</button>
            <ul>
                <ShoppingCartItem />
            </ul>
        </div>
    );
}
