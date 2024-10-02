import { useRef } from "react";


export function InputFocus() {
    const inputRef = useRef(); // Create a reference to an input element

    function handleClick() {
        inputRef.current.focus(); // Focus on the input field when button is clicked
    }

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Click the button to focus" />
            <button onClick={handleClick}>Focus Input</button>
        </div>
    );
}