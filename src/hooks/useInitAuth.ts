import { useEffect } from "react";
import { useAppDispatch } from "../store/store"
import { setRefreshToken, setToken, setUser } from "../store/features/authSlice";

export const useInitAuth = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const token = localStorage.getItem("token") || "";
        const refresh = localStorage.getItem("refresh") || "";
        const user = localStorage.getItem("user") || "";

        dispatch(setUser(user));
        dispatch(setToken(token));
        dispatch(setRefreshToken(refresh));
    },[dispatch]);
};