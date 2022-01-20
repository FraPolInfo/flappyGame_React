import "./StartMenu.css"

import PropTypes from 'prop-types';


const StartMenu = (props) => {

    const handlerRunGame = () => {
        if (props.callbackRunGame !== undefined) {
            props.callbackRunGame();
        }
    }





    return (
        <div className="start-menu">
            io sono start menu
            <button onClick={handlerRunGame} > avvia gioco </button>
        </div>
    )
}

StartMenu.defaultProps = {

}

StartMenu.propTypes = {
    callbackRunGame: PropTypes.func
};

export default StartMenu;