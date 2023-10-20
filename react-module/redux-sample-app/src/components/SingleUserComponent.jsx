import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserMiddleWare, getUserByIdMiddleWare } from "../redux/middlewares/UserMiddleware";

const SingleUserComponent = () => {

    const { 
        singleUserLoading,
        singleUserError,
        user
    } = useSelector(store => store.userSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserByIdMiddleWare(2));
    }, []);

    if (singleUserLoading) {
        return (
            <div className="loader-contaner">
                Loading Single user....
            </div>
        )
    }

    if (singleUserError) {
        return (
            <div className="error-container">
                <div>Error in fetching a user</div>
            </div>
        )
    }

    if (user) {
        return (
            <div className="userContainer" style={{marginTop: "10px"}}>
                <div className="id">{user.id}</div>
                <div className="name">{user.name}</div>
                <div className="username">{user.username}</div>
            </div>
        )
    }
};

export default SingleUserComponent;