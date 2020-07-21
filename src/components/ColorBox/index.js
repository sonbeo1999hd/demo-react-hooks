import React, {useState} from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {
    
};
function getRandomColor(){
    const list = ['red', 'yellow', 'orange', 'pink', 'deeppink'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return list[randomIndex];
}

function ColorBox(props) {
    const initialState = localStorage.getItem('box-color') || 'deeppink'
    const [color, setColor] = useState(() => {
        const initialState = localStorage.getItem('box-color') || 'deeppink';
        return initialState
    })
    function handleBoxClick(){
        const newColor = getRandomColor();
        setColor(newColor)
        localStorage.setItem('box-color', newColor)
    }
    return (
        <div className="color-box" style={{backgroundColor: color}} onClick={handleBoxClick}>
            ColorBox
        </div>
    );
}

export default ColorBox;