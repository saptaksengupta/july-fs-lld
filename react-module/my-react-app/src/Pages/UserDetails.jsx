import { useParams } from "react-router-dom";

const UserDetails  = () => {

    const {userId} = useParams();

    return (
        <div>
            User details for: {userId}
        </div>
    )
};

export default UserDetails;