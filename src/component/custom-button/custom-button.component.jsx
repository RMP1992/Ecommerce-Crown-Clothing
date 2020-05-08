import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps}) =>(
    //the children prop here refers to the onSubmit method on the form , in the sign-in.component
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
        {/* so long isGoogleSignIn has been passed as property of the CustomButton in the sign-in.component then the styles under the className google-sign-in will be applied, and we always apply custom-button styles */}
        {children}
    </button>
)
export default CustomButton;