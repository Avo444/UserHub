import Slider from "../Slider";
import styles from "./index.module.scss";

const HomeContent = () => {
    return (
        <div className={styles.home}>
            <div className={styles.container}>
                <Slider />
            </div>
        </div>
    );
};

export default HomeContent;
