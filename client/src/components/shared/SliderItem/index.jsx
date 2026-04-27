import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants";

import styles from "./index.module.scss";

const SliderItem = ({ user }) => {
    return (
        <div className={styles.item}>
            <div className={styles.img}>
                <img
                    src={
                        user.storage === "multer"
                            ? `${import.meta.env.VITE_BACKEND_API}${user.avatar}`
                            : `${import.meta.env.VITE_DRIVE_API}${user.avatar}&sz=w500`
                    }
                    alt={user.storage}
                    referrerPolicy="no-referrer"
                />
            </div>
            <ul className={styles.content}>
                <li className={styles.title}>{user.name}</li>
                <li className={styles.content__item}>
                    Email: <span>{user.email}</span>
                </li>
                <li className={styles.content__item}>
                    Storage: <span>{user.storage}</span>
                </li>
                <li>
                    <Link
                        to={`${ROUTES.VIEW}/${user._id}`}
                        className={styles.btn}
                    >
                        View
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SliderItem;
