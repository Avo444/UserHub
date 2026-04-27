import styles from "./index.module.scss";

const NotFoundContent = () => {
    return (
        <section className={styles.block}>
            <h1 className={styles.title}>404</h1>
            <h2 className={styles.subtitle}>Page Is Not Found!</h2>
        </section>
    );
};

export default NotFoundContent;
