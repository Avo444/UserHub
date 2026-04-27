import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

const NavbarItem = ({ title, link }) => {
    return (
        <li>
            <NavLink to={link} className={styles.item}>{title}</NavLink>
        </li>
    );
};

export default NavbarItem;
