import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { ROUTES } from "./constants";
import { Navbar } from "./components/features";
import { getUsersData } from "./store/slices";
import { AddUserPage, Home, NotFound, View } from "./pages";


import "./App.scss";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersData());
    }, []);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.ADD_USER} element={<AddUserPage />} />
                <Route path={`${ROUTES.VIEW}${ROUTES.EACH_VIEW}`} element={<View />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <ToastContainer />
        </>
    );
};

export default App;
