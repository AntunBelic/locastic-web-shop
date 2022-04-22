import "./WorkShop.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush, faBolt, faCode, faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { WorkShopItem } from "../workshopItem/WorkShopItem";
import { ReactNode, useContext } from 'react';
import DataContext from "../../../context/DataContext";


export interface IWorkShopProps {
    category: string;
    date: string;
    desc: string;
    id: number;
    imageUrl: string;
    price: number;
    title: string;
    userId: number;
}

export function WorkShop() {
    let { workshops, loading, error, handleFilter, handleLoadMore }: any = useContext(DataContext);



    let items: ReactNode = workshops?.map((item: IWorkShopProps) => {
        return <WorkShopItem item={item} key={item.id} />
    })
    return (
        <div className="workshop__container">
            <div className="workshop__categories">
                <h6 className="workshop__categories_title">Filter by category:</h6>
                <ul className="workshop__categories_tags">
                    <li onClick={() => handleFilter("")} ><span className="icon"></span><h5>All</h5></li>
                    <li onClick={() => handleFilter("design")}><FontAwesomeIcon icon={faPaintBrush} className="icon" /><h5>Design</h5></li>
                    <li onClick={() => handleFilter("frontend")}><FontAwesomeIcon icon={faTableColumns} className="icon" /><h5>Frontend</h5></li>
                    <li onClick={() => handleFilter("backend")}><FontAwesomeIcon icon={faCode} className="icon" /><h5>Backend</h5></li>
                    <li onClick={() => handleFilter("marketing")}><FontAwesomeIcon icon={faBolt} className="icon" /><h5>Marketing</h5></li>
                </ul>
            </div>
            <div className="workshop__workshops">
                <h2 className="workshop__workshops__title">Workshops</h2>
                <div className="workshop__workshops__count">
                    <h6 className="workshop__workshops__count_desc">Displayed: </h6>
                    <span className="workshop__workshops__count_num">{workshops?.length}</span>
                </div>
                {
                    loading ?
                        <div className="spinner__container"><div className="spinningCircle"></div></div> : <div className="workshop__grid__container">
                            {items}
                        </div>
                }
                {error && <h2>{error}</h2>}
                {
                    workshops?.length === 9 && <button className="workshop__load_btn" onClick={() => handleLoadMore()}>Load More</button>}
            </div>

        </div>
    );
}
