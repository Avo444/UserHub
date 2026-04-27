import { Bounce, toast } from "react-toastify";
const useNotification = () => {
    const notification = (notify, type = "success") => {
        toast(notify, {
            type,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };
    const promiseNotification = async (promise, pending, success) => {
        await toast.promise(promise, {
            pending,
            success
        });
    };
    return { notification, promiseNotification };
};

export default useNotification;
