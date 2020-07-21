import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    
};

function PostFilterForm(props) {
    const {onSubmit} = props
    const [searchTerm, setSearchTerm] =  useState('');
    const typingTimeOut = useRef(null);
    function handleChangeValue(e){
        const value = e.target.value;
        setSearchTerm(value);
        // const formValues = {value};

        if(typingTimeOut.current ){
            clearTimeout(typingTimeOut.current)
        }
        typingTimeOut.current = setTimeout(() => {
            const formValues = {
                searchTerm: value
            }
            onSubmit(formValues);
        }, 500)
    }
    return (
        <form>
            <input type="text" value={searchTerm} onChange={(e) => handleChangeValue(e)}/>
        </form>
    );
}

export default PostFilterForm;