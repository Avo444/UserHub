/* ================================ [ Reducer's ] ================================ */
import {
    getUsers,
    usersReducer,
    getUsersError,
    getUsersLoader,
} from "./usersSlice/usersSlice";

/* ================================ [ API's ] ================================ */
import { addUserData, getUsersData, updateUserAvatar } from "./usersSlice/api";

export {
    // Reducer's
    usersReducer,

    // API's
    getUsersData,
    addUserData,
    updateUserAvatar,
    
    // State's
    getUsers,
    getUsersError,
    getUsersLoader,
};
