import React from "react";
import "./Footer.css"

export interface IFooterProps {
}

export function Footer(props: IFooterProps) {



    return (
        <footer className="footer__container">
            <h6 className="footer">&copy; TINEL Meetup 2022.</h6>
        </footer>
    );
}
