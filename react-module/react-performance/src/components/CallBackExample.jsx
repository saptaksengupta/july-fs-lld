import { useCallback } from "react";
import { useState } from "react";

const CallBackExample = () => {
    const [term, setTerm] = useState("asd");

    // const onItemClicked = () => {
    //     console.log("Item Clicked!");
    // }

    const onItemClicked = useCallback(() => {
        console.log("Item Clicked!")
    }, [term]);

    // Bad usecase
    // const onItemClicked = useCallback(() => {
    //     console.log("Item Clicked!")
    // }, []);


    return (
        <div>
            <BigList term={term} onItemClicked={onItemClicked} />
        </div>
    )

}

export default CallBackExample;


const BigList = ({term, onItemClicked}) => {
    const items = getSeachedItems(term);

    const itemMap = (item, index) => <div key={index} onClick={onItemClicked} >{item}</div>
    return (
        <div>
            {
                items.map(itemMap)
            }
        </div>
    )
}

const getSeachedItems = () => {
    return ["123213", "asdadsad", "123213", "asdadsad", "123213", "asdadsad"];
}