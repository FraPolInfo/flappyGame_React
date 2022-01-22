import './Button.css'

import PropTypes from 'prop-types';

const Button = (props) => {

    const handlerButtonClick = () => {
        if (props.clickButton !== undefined) {
            props.clickButton()
        }
    }


    return (
        <>
            <button
                className={`default ${props.specialClass}`}
                onClick={handlerButtonClick}>
                {props.label}
            </button>
        </>
    )
}
Button.defaultProps = {
    label: 'cliccami'
}

Button.propTypes = {
    clickButton: PropTypes.func,
    label: PropTypes.string,
    specialClass: PropTypes.string
};


export default Button