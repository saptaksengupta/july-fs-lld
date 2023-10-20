import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserMiddleWare, getUserByIdMiddleWare } from "../redux/middlewares/UserMiddleware";

const UsersComponent = () => {
    const {
        loading,
        users,
        error
    } = useSelector(store => store.userSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserMiddleWare());
    }, []);

    if (loading) {
        return (
            <div className="loader-contaner">
                Loading....
            </div>
        )
    }

    if (error) {
        return (
            <div className="error-container">
                <div>Error in fetching all users</div>
            </div>
        )
    }

    if (users) {
        return (<>
            <div style={{ margin: "10px", padding:"10px",  border: "1px solid gray" }}>
                {users.map(user => {
                    return (
                        <div className="userContainer">
                            <div className="id">{user.id}</div>
                            <div className="name">{user.name}</div>
                            <div className="username">{user.username}</div>
                        </div>
                    )
                })}
            </div>
        </>)
    }
};

export default UsersComponent;