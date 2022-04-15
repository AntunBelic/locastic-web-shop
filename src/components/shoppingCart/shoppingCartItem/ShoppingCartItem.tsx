import * as React from 'react';

export interface IShoppingCartItemProps {
}

export function ShoppingCartItem(props: IShoppingCartItemProps) {
    return (
        <li className='item'>
            <div className='item__container'>
                <div className='item__img'>slika</div>
                <div className='item__info'>
                    <div className='item__info__top'>
                        <h4 className='item__title'>naslov</h4>
                        <span>K</span>
                    </div>
                    <div className='item__info__bot'>
                        <h3>1</h3>
                        <div className='price'>
                            <h3>450,00</h3><h6>EUR</h6>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
