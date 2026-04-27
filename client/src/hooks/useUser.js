import { ROUTES } from "../constants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUserData, getUsersError } from "../store/slices";

import useNotification from "./useNotification";

const useUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const notification = useNotification();
    const userError = useSelector(getUsersError);

    const addUserHandle = async (values) => {
        try {
            const form = new FormData();

            Object.entries(values).forEach(([key, value]) =>
                form.append(key, value),
            );

            const user = await dispatch(addUserData(form)).unwrap();
            notification(`${user.name} is added successful!`);
            navigate(ROUTES.HOME);
        } catch (error) {
            console.log(error, "error");
            notification(error, "error");
        }
    };
    return { addUserHandle };
};

export default useUser;
