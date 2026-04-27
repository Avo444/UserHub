import { useSelector } from "react-redux";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { getUsers } from "../../../store/slices";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./index.module.scss";
import SliderItem from "../../shared/SliderItem";

const Slider = () => {
    const users = useSelector(getUsers);
    ;
    return (
        <>
            {users.length ? (
                <Swiper
                    pagination={true}
                    slidesPerView={3}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className={styles.slider}
                >
                    {users.map((user) => (
                        <SwiperSlide>
                            <SliderItem user={user} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <h2 className={styles.info}>Users is not found</h2>
            )}
        </>
    );
};

export default Slider;
