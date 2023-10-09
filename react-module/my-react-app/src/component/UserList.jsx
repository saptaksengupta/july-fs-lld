import { useState } from "react";
import User from "./User";


// Non controlled component 
// Managing it's own state
const UserList = () => {
    const [users, setUsers] = useState([]);

    const onAddUserClicked = () => {
        setUsers([...users, {
            name: "User" + users.length
        }]);
    }

    return (
        <div>
            <button onClick={onAddUserClicked}>Add User</button>
            <ul>
            {
                users && users.map((user, index) => {
                    return (<User key={index} name={user.name}></User>);
                })
            }
            </ul> 
            
        </div>
    )
}

export default UserList;