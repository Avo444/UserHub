/* ================================ [ Reducer's ] ================================ */
import {
    getUsers,
    usersReducer,
    getUsersError,
    getUsersLoader,
} from "./usersSlice/usersSlice";

/* ================================ [ API's ] ================================ */
import { addUserData, getUsersData } from "./usersSlice/api";

export {
    // Reducer's
    usersReducer,

    // API's
    getUsersData,
    addUserData,
    
    // State's
    getUsers,
    getUsersError,
    getUsersLoader,
};
