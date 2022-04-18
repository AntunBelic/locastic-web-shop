
import "./ShoppingCartItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
export interface IShoppingCartItemProps {
}

export function ShoppingCartItem(props: IShoppingCartItemProps) {
    return (
        <li className='item'>
            <div className='item__container'>
                <div className='item__img__container'>
                    <img className='item__img' src="https://pbs.twimg.com/media/EREoip3XsAEPDRp.jpg" alt='slika'></img>
                </div>
                <div className='item__info'>
                    <div className='item__info__top'>
                        <h4 className='item__title'>Interaction dsgn workshop</h4>
                        <FontAwesomeIcon icon={faTrashCan} color="#7F7F7F" />
                    </div>
                    <div className='item__info__bot'>
                        <div>
                            <select className="item__num">
                                <option className="item__num__option">1</option>
                            </select>
                        </div>
                        <div className='price'>
                            <h3 className="price__num">450,00</h3><h6 className="price__text">EUR</h6>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
