import React from 'react'
import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignin, inverted,noninverted, ...otherProps}) => (
    <button className={`${inverted ? 'inverted' : " "} 
                        ${noninverted ? 'noninverted' : " "} 
                        ${isGoogleSignin ? 'isGoogleSignin' : " "}
                         custom-button `} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;