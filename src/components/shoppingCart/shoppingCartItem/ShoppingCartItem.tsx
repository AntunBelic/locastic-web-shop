
import "./ShoppingCartItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { IWorkShopProps } from "../../../context/DataContext";
import { useContext } from 'react';
import DataContext from "../../../context/DataContext";



export interface IShoppingCartItemProps {
    key: number;
    item: IWorkShopProps;
}

export function ShoppingCartItem(props: IShoppingCartItemProps) {
    let { handleCartItemChange, handleRemoveItem }: any = useContext(DataContext);

    let arrOfOptions: number[] = [];

    for (let i = 1; i < props.item.amount + 3; i++) {
        arrOfOptions.push(i);
    }

    const options = arrOfOptions.map(item => (<option className="item__num__option" value={item} key={item}>{item}</option>))

    return (
        <li className='item'>
            <div className='item__container'>
                <div className='item__img__container'>
                    <img className='item__img' src={props.item.imageUrl} alt='slika'></img>
                </div>
                <div className='item__info'>
                    <div className='item__info__top'>
                        <h4 className='item__title'>{props.item.title}</h4>
                        <FontAwesomeIcon icon={faTrashCan} className="item__info__top_trash" onClick={() => handleRemoveItem(props.item)} />
                    </div>
                    <div className='item__info__bot'>
                        <div>
                            <select className="item__num" value={props.item.amount} onChange={(e) => handleCartItemChange(props.item, e)}>
                                {options}
                            </select>
                        </div>
                        <div className='price'>
                            <h3 className="price__num">{props.item.total.toFixed(2)}</h3><h6 className="price__text">EUR</h6>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}
