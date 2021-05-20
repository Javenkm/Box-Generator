import React, { useState } from 'react';

const BoxGenerator = (props) => {

    const [newColor, setNewColor] = useState("");

    function newBox(event) {
        event.preventDefault()
        props.setBoxes([...props.boxes, newColor]);
        setNewColor("")
    }

    return (
        <form onSubmit={(event) => newBox(event)}>
            <label>Color</label>
            <input
                onChange = {(event) => {
                    setNewColor(event.target.value);
                }}
                type="text"
                value={newColor} // needed if we want to clear the input box
            />
            <button>Add</button>
        </form>
    )
}

export default BoxGenerator;