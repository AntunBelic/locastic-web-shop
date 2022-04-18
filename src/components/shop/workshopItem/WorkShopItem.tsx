import "./WorkShopItem.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faClock, faPaintBrush } from "@fortawesome/free-solid-svg-icons";

export interface IWorkShopItemProps {
}

export function WorkShopItem(props: IWorkShopItemProps) {
    return (
        <div className='card__container'>
            <div className='card__img__container'>
                <img className='card__img' src="https://pbs.twimg.com/media/EREoip3XsAEPDRp.jpg" alt='slika'></img>
                <FontAwesomeIcon icon={faPaintBrush} className='card__category__icon' />
            </div>
            <div className='card__info__container'>
                <div className='card__info__date-time'>
                    <div className='card__info__date'>
                        <FontAwesomeIcon icon={faCalendarDays} className="card__info__date_icon" />
                        <span>27.6.2020.</span>
                    </div>
                    <div className='card__info__date'>
                        <FontAwesomeIcon icon={faClock} className="card__info__date_icon" />
                        <span>09:00h</span>
                    </div>
                </div>
                <h5 className='card__info__title'>
                    Interaction to Design Workshop
                </h5>
                <div className='card__info__price'>
                    <h3 className="card__info__price_amount">450,00</h3>
                    <h6 className="card__info__price_currency">EUR</h6>
                </div>
                <button className='card__info__add_btn'>Add to Cart</button>
            </div>
        </div>
    );
}
