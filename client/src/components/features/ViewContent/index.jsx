import { useUser } from "../../../hooks";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsers } from "../../../store/slices";
import { FaCloudUploadAlt } from "react-icons/fa";
import { setAvatarSchema } from "../../../schemas";
import { ErrorMessage, Formik, Form } from "formik";
import { setAvatarValues } from "../../../constants";

import styles from "./index.module.scss";

const ViewContent = () => {
    const { id } = useParams();
    const { setAvatarHandle } = useUser();
    const [user, setUser] = useState({});

    const users = useSelector(getUsers);
    useEffect(() => {
        setUser(users.find((user) => user._id === id));
    }, [id, users]);
    return (
        user && (
            <section className={styles.view}>
                <div className={styles.container}>
                    <div className={styles.view__content}>
                        <div className={styles.img}>
                            <img
                                src={
                                    user.storage === "multer"
                                        ? `${import.meta.env.VITE_BACKEND_API}${user.avatar}`
                                        : `${import.meta.env.VITE_DRIVE_API}${user.avatar}&sz=w500`
                                }
                                alt={user.storage}
                                referrerPolicy="no-refferer"
                            />
                            <Formik
                                initialValues={setAvatarValues}
                                validationSchema={setAvatarSchema}
                                onSubmit={(e) => setAvatarHandle(e, user._id)}
                            >
                                {({ setFieldValue }) => (
                                    <Form className={styles.form}>
                                        <label>
                                            <FaCloudUploadAlt size={50} />
                                            <input
                                                type="file"
                                                name="file"
                                                onChange={(e) =>
                                                    setFieldValue(
                                                        "file",
                                                        e.currentTarget
                                                            .files[0],
                                                    )
                                                }
                                            />
                                            <ErrorMessage
                                                className={styles.error}
                                                name="file"
                                                component={"p"}
                                            />
                                        </label>
                                        <button className={styles.btn}>
                                            Change
                                        </button>
                                    </Form>
                                )}
                            </Formik>
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
