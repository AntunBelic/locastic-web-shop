import "./WorkShop.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faBolt, faCode, faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { WorkShopItem } from "../workshopItem/WorkShopItem";


export interface IWorkShopProps {
}

export function WorkShop(props: IWorkShopProps) {
    return (
        <div className="workshop__container">
            <div className="workshop__categories">
                <h6 className="workshop__categories_title">Filter by category:</h6>
                <ul className="workshop__categories_tags">
                    <li><span className="icon"></span><h5>All</h5></li>
                    <li><FontAwesomeIcon icon={faPaintBrush} className="icon" /><h5>Design</h5></li>
                    <li><FontAwesomeIcon icon={faTableColumns} className="icon" /><h5>Frontend</h5></li>
                    <li><FontAwesomeIcon icon={faCode} className="icon" /><h5>Backend</h5></li>
                    <li><FontAwesomeIcon icon={faBolt} className="icon" /><h5>Marketing</h5></li>
                </ul>
            </div>
            <div className="workshop__workshops">
                <h2 className="workshop__workshops__title">Workshops</h2>
                <div className="workshop__workshops__count">
                    <h6 className="workshop__workshops__count_desc">Displayed: </h6>
                    <span className="workshop__workshops__count_num">13</span>
                </div>
                <div className="workshop__grid__container">
                    <WorkShopItem />
                    <WorkShopItem />
                    <WorkShopItem />
                    <WorkShopItem />
                    <WorkShopItem />
                    <WorkShopItem />
                    <WorkShopItem />
                    <WorkShopItem />
                    <WorkShopItem />
                </div>
                <button className="workshop__load_btn">Load More</button>
            </div>
        </div>
    );
}
