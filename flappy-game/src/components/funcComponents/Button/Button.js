import './Button.css'

import PropTypes from 'prop-types';

const Button = (props) => {

    const handlerButtonClick = () => {
        if (props.clickButton !== undefined) {
            props.clickButton()
        }
    }


    return (
        <div className="container-button">
            <button
                className={`default ${props.specialClass}`}
                onClick={handlerButtonClick}>
                {props.label}
            </button>
        </div>
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