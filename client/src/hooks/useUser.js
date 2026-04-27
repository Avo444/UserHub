import { ROUTES } from "../constants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUserData, getUsersError, updateUserAvatar } from "../store/slices";

import useNotification from "./useNotification";

const useUser = () => {
    const { notification, promiseNotification } = useNotification();
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userError = useSelector(getUsersError);

    const addUserHandle = async (values) => {
        try {
            const form = new FormData();

            Object.entries(values).forEach(([key, value]) =>
                form.append(key, value),
            );
            
            await promiseNotification(
                dispatch(addUserData(form)).unwrap(),
                "Please wait...",
                `${values.name} is added successful!`,
            );
            navigate(ROUTES.HOME);
        } catch (error) {
            notification(error, "error");
        }
    };

    const setAvatarHandle = async (values, userID) => {
        try {
            const form = new FormData();
            form.append("file", values.file);

            const updated = await dispatch(updateUserAvatar({ form, userID }));
            notification("Avatar is updated successfull!");
        } catch (error) {
            notification(error, "error");
        }
    };
    return { addUserHandle, setAvatarHandle };
};

export default useUser;
