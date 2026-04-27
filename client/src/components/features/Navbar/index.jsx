import { Link } from "react-router-dom";
import { NavbarItem } from "../../shared";
import { ROUTES } from "../../../constants";

import styles from "./index.module.scss";

const Navbar = () => {
    return (
        <nav>
            <div className={styles.container}>
                <div className={styles.nav__content}>
                    <Link to={ROUTES.HOME} className={styles.logo}>
                        UserHub
                    </Link>

                    <ul className={styles.menu}>
                        <NavbarItem title={"Add User"} link={ROUTES.ADD_USER} />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
