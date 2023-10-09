// controlled by parent(UserList)
// controlled component 
const User = (props) => {
    const {name} = props;
    return (<li>{name}</li>);
} 

export default User;