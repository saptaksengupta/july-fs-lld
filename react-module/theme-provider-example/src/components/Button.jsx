const ThemedButton = ({label, action}) => {

    const onButtonClicked = () => {
        if (action){
            action();
        }
    }

    return (
        <>
            <button className="btn" onClick={() => onButtonClicked()}>{label}</button>
        </>
    )
}

export default ThemedButton;