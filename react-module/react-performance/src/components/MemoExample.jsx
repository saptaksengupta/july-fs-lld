import { useMemo } from "react";
import { useState } from "react";

const MemoExample = () => {

    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(0);

    console.log("re rendered!");
    const factorialRes = useMemo(() => factorialOf(number), [number]);
    // const factorialRes = factorialOf(number);

    const onInputChange = (e) => {
        setNumber(Number(e.target.value));
    }

    const onRerender = () => {
        setValue(prev => prev + 1);
    }
    return (
        <div style={{ padding: "15px" }}>
            <input type="number" min="0" onChange={onInputChange} />
            <div>
                Factorial of {number} is: {factorialRes}
            </div>

            <div>
                Some other value: {value}
            </div>

            <button onClick={onRerender}>Re-render</button>
        </div>
    )
};

function factorialOf(n) {
    console.log("this function is getting called for", n);
    return n <= 0 ? 1 : n * factorialOf(n-1);
}

export default MemoExample;