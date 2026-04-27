import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUsers } from "../../../store/slices";

import styles from "./index.module.scss";

const ViewContent = () => {
    const { id } = useParams();
    const users = useSelector(getUsers);
    const user = users.find((user) => user._id === id);

    return (
        user && (
            <section className={styles.view}>
                <div className={styles.container}>
                    <div className={styles.view__content}>
                        <div className={styles.img}>
                            <img src={`${import.meta.env.VITE_DRIVE_API}${user.avatar}&sz=w500`} alt="" referrerPolicy="no-refferer" />
                        </div>
                        <ul className={styles.info}>
                            <li className={styles.info__item}>
                                <p>Name:</p> <span>{user.name}</span>
                            </li>
                            <li className={styles.info__item}>
                                <p>Email:</p> <span>{user.email}</span>
                            </li>
                            <li className={styles.info__item}>
                                <p>Storage:</p> <span>{user.storage}</span>
                            </li>
                            <li className={styles.info__item}>
                                <p>Created At:</p>{" "}
                                <span>
                                    {new Date(
                                        user.createdAt,
                                    ).toLocaleDateString()}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    );
};

export default ViewContent;
