import "./WorkShopItem.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClock, faPaintBrush, faBolt, faCode, faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import DataContext from "../../../context/DataContext";


export interface IWorkShopItemProps {
    category: string;
    date: string;
    desc: string;
    id: number;
    imageUrl: string;
    price: number;
    title: string;
    userId: number;
}

export function WorkShopItem({ item }: { item: IWorkShopItemProps }) {

    let { addToCart }: any = useContext(DataContext);

    const timestamp = Date.parse(item.date);
    const date = new Date(timestamp)
    const hours = "0" + date.getHours()
    const minutes = "0" + date.getMinutes()
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const EventTime = `${hours.substr(-2)}:${minutes.substr(-2)}h`
    const EventDate = `${day}.${month}.${year}.`
    let icon;

    switch (item.category) {
        case "marketing":
            icon = faBolt;
            break;
        case "frontend":
            icon = faTableColumns;
            break;
        case "backend":
            icon = faCode;
            break;
        default:
            icon = faPaintBrush;
    }


    return (
        <div className='card__container'>
            <div className='card__img__container'>
                <img className='card__img' src={item.imageUrl} alt='slika'></img>
                <FontAwesomeIcon icon={icon} className='card__category__icon' />
            </div>
            <div className='card__info__container'>
                <div className='card__info__date-time'>
                    <div className='card__info__date'>
                        <FontAwesomeIcon icon={faCalendarDays} className="card__info__date_icon" />
                        <span>{EventDate}</span>
                    </div>
                    <div className='card__info__date'>
                        <FontAwesomeIcon icon={faClock} className="card__info__date_icon" />
                        <span>{EventTime}</span>
                    </div>
                </div>
                <h5 className='card__info__title'>
                    {item.title}
                </h5>
                <div className='card__info__price'>
                    <h3 className="card__info__price_amount">{item.price.toFixed(2)}</h3>
                    <h6 className="card__info__price_currency">EUR</h6>
                </div>
                <button className='card__info__add_btn' onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
        </div>
    );
}
