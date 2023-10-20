
import UserSlice from "../UserSlice";

const USER_ENDPOINT = "https://jsonplaceholder.typicode.com/users";
const actions = UserSlice.actions;
export const fetchUserMiddleWare = () => {
    return async(dispatch) => {
        try {
            //Handle loading
            dispatch(actions.showLoading);

            const resp = await fetch(USER_ENDPOINT);
            const users = await resp.json();

            // Handle Success
            dispatch(actions.setUserData(users));
        } catch(ex) {
            // Handle Error
            dispatch(actions.showError(ex.getMessage()));
        }
    }
}

export const getUserByIdMiddleWare = (id) => {
    return async(dispatch) => {
        try {
            dispatch(actions.showSingleUserLoading());
            const resp = await fetch(`${USER_ENDPOINT}?id=${id}`);
            const userResp = await resp.json();
            dispatch(actions.setSingleUserData(userResp[0]));
        } catch(ex) {
            dispatch(actions.showSingleUserError());
        }
    }
}