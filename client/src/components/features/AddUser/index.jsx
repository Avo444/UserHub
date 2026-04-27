import { useUser } from "../../../hooks";
import { ErrorMessage, Field, Form, Formik } from "formik";

import { addUserSchema } from "../../../schemas";
import { addUserValues } from "../../../constants";
import { FaCloudUploadAlt } from "react-icons/fa";

import styles from "./index.module.scss";
const AddUser = () => {
    const { addUserHandle } = useUser();
    return (
        <div className={styles.form__wrapper}>
            <div className={styles.container}>
                <Formik
                    initialValues={addUserValues}
                    validationSchema={addUserSchema}
                    onSubmit={addUserHandle}
                >
                    {({ setFieldValue }) => (
                        <Form className={styles.form}>
                            <label>
                                Name:
                                <Field type="text" name="name" />
                                <ErrorMessage
                                    className={styles.error}
                                    name="name"
                                    component={"p"}
                                />
                            </label>
                            <label>
                                Email:
                                <Field type="email" name="email" />
                                <ErrorMessage
                                    className={styles.error}
                                    name="email"
                                    component={"p"}
                                />
                            </label>
                            <label>
                                Password:
                                <Field type="password" name="password" />
                                <ErrorMessage
                                    className={styles.error}
                                    name="password"
                                    component={"p"}
                                />
                            </label>
                            <label>
                                Storage:
                                <Field as="select" name="storage">
                                    <option value="" selected hidden>
                                        Choose
                                    </option>
                                    <option value="multer">Multer</option>
                                    <option value="drive">Google Drive</option>
                                </Field>
                                <ErrorMessage
                                    className={styles.error}
                                    name="storage"
                                    component={"p"}
                                />
                            </label>

                            <label>
                                Avatar:
                                <FaCloudUploadAlt size={32} />
                                <input
                                    type="file"
                                    name="file"
                                    onChange={(e) =>
                                        setFieldValue(
                                            "file",
                                            e.currentTarget.files[0],
                                        )
                                    }
                                />
                                <ErrorMessage
                                    className={styles.error}
                                    name="file"
                                    component={"p"}
                                />
                            </label>

                            <button className={styles.btn}>Add User</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default AddUser;
