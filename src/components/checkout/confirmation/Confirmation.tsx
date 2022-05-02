import { Link } from "react-router-dom";
import "./confirmation.css"


export function Confirmation() {
    return (
        <div className='confirmation__container'>
            <h2 className="confirmation__title">Thank you!</h2>
            <h6 className="confirmation__text">We have received your order.<br />Soon you will get email with your tickets.</h6>
            <Link to="/locastic-web-shop"><button className="confirmation__btn">Back to Shop</button></Link>
        </div>
    );
}
