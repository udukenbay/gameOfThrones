import React from 'react';
import img from './error.jpg';

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt='Error'></img>
            <span>Something goes wrong :(</span>
        </>
    )
    
}
export default ErrorMessage;